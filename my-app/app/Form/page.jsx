"use client"

import React, { useState, useRef } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import ADRForm from "../component/Form1";
import Pdf from "../component/Pdf";
import ADRGuidelinesPage from "../component/Form2";
import ADRFormPage3 from "../component/Form3";
import Pharmacovigelence from "../component/Pharmacovigelence";
import { sendADRFormEmail } from "../actions/sendEmail";

export default function Form() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitError, setSubmitError] = useState("");
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");
    setSubmitError("");

    try {
      // Collect all form data
      const formElements = formRef.current.querySelectorAll("input, textarea, select");
      const formData = {};

      formElements.forEach((element) => {
        if (element.name) {
          if (element.type === "checkbox") {
            if (!formData[element.name]) {
              formData[element.name] = [];
            }
            if (element.checked) {
              formData[element.name].push(element.value || "checked");
            }
          } else if (element.type === "radio") {
            if (element.checked) {
              formData[element.name] = element.value;
            }
          } else {
            formData[element.name] = element.value;
          }
        }
      });

      console.log("Form Data Collected:", formData);

      // Send email with form data
      const result = await sendADRFormEmail(formData);
      
      console.log("Submit Result:", result);

      if (result.success) {
        setSubmitMessage(result.message);
        formRef.current.reset();
        // Auto-hide message after 5 seconds
        setTimeout(() => setSubmitMessage(""), 5000);
      } else {
        setSubmitError(result.error || "Failed to submit form");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitError("An error occurred while submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ background: "white" }}>
      <Header />
      <Pharmacovigelence />
        <Pdf></Pdf>
      
      <form ref={formRef} onSubmit={handleSubmit}>
        {/* <ADRForm />
        <ADRGuidelinesPage />
        <ADRFormPage3 /> */}

        <div className="max-w-sm mx-auto px-4 md:px-6 py-6 md:py-8">
          {/* Success Message */}
          {submitMessage && (
            <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
              <span className="font-semibold">✅ Success!</span> {submitMessage}
            </div>
          )}

          {/* Error Message */}
          {submitError && (
            <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              <span className="font-semibold">❌ Error:</span> {submitError}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full font-medium text-base md:text-lg py-3 md:py-3.5 rounded-lg transition-all duration-200 shadow-md focus:outline-none focus:ring-4 ${
              isSubmitting
                ? "bg-gray-400 text-white cursor-not-allowed"
                : "bg-red-800 text-white hover:shadow-lg focus:ring-red-300 active:scale-95"
            }`}
          >
            {isSubmitting ? "Submitting..." : "Submit Form"}
          </button>
        </div>
      </form>

      <Footer />
    </div>
  );
}