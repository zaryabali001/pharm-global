"use client";
import { useState, useEffect } from "react";
import { useResponsive } from "./useResponsive";
import { sendADRFormEmail } from "../actions/sendEmail";

export default function PharmaCovigelence() {
  const screenSize = useResponsive();
  const [mounted, setMounted] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    reporterName: "",
    reporterEmail: "",
    reporterPhone: "",
    reportType: "",
    productName: "",
    reportDetails: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    // eslint-disable-next-line
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const padding = screenSize.isMobile
    ? "20px 16px 16px 16px"
    : screenSize.isTablet
      ? "30px 32px 24px 32px"
      : "40px 48px 32px 48px";
  const fontSize = screenSize.isMobile ? 20 : screenSize.isTablet ? 24 : 30;
  const bodyFontSize = screenSize.isMobile ? 14 : 16;
  const emailFontSize = screenSize.isMobile ? 12 : 18;
  const formFontSize = screenSize.isMobile ? 12 : 14;
  const marginBottom = screenSize.isMobile ? "20px" : "28px";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");
    setSubmitError("");

    try {
      if (
        !formData.reporterName ||
        !formData.reporterEmail ||
        !formData.reportDetails
      ) {
        setSubmitError("Please fill in all required fields.");
        setIsSubmitting(false);
        return;
      }

      const result = await sendADRFormEmail({
        reporterName: formData.reporterName,
        reporterEmail: formData.reporterEmail,
        reporterPhone: formData.reporterPhone,
        reportType: formData.reportType,
        productName: formData.productName,
        reportDetails: formData.reportDetails,
        formType: "Pharmacovigilance Report",
      });

      if (result.success) {
        setSubmitMessage(result.message);
        setFormData({
          reporterName: "",
          reporterEmail: "",
          reporterPhone: "",
          reportType: "",
          productName: "",
          reportDetails: "",
        });
        setTimeout(() => {
          setSubmitMessage("");
          setShowForm(false);
        }, 3000);
      } else {
        setSubmitError(result.error || "Failed to submit report");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitError(
        "An error occurred while submitting the report. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      style={{
        background: "#fff",
        fontFamily: "'Outfit', sans-serif",
        padding: padding,
        maxWidth: "1000px",
        margin: "0 auto",
        border: "1px solid #e8e8e8",
      }}
    >
      {!showForm ? (
        <>
          {/* Title */}
          <h1
            style={{
              color: "#9D0B0F",
              fontSize: fontSize,
              fontFamily: "'Outfit', sans-serif",
              letterSpacing: "0.2px",

            }}
          >
            Pharmacovigilance
          </h1>

          {/* Red underline */}
          <div
            style={{
              width: "38px",
              height: "2.5px",
              background: "#c0151f",
              marginBottom: marginBottom,
            }}
          />

          {/* Body paragraph */}
          <p
            style={{
              fontSize: bodyFontSize,
              lineHeight: "1.85",
              color: "#222",
              textAlign: "justify",
              margin: "0 0 28px 0",
              fontFamily: "'Outfit', sans-serif",
            }}
          >
            We employ a robust system for collecting and analyzing adverse event
            reports, ensuring full compliance with global regulatory standards
            and safeguarding patient health. Our pharmacovigilance team is
            dedicated to the continuous monitoring and assessment of the safety
            profile of our products, ensuring that any potential risks are
            promptly identified and addressed. Through proactive risk management
            strategies, we assess and mitigate safety risks associated with our
            medications, prioritizing patient well-being in all stages of
            product life cycles. Our commitment to safety is reflected in the
            preparation and submission of Periodic Safety Update Reports (PSURs)
            to regulatory authorities, ensuring transparency and ongoing
            evaluation of product safety.
          </p>

          {/* Email line and Submit Button */}
          <div
            style={{
              borderTop: "1px solid #e0e0e0",
              paddingTop: "16px",
              display: "flex",
              flexDirection: screenSize.isMobile ? "column" : "row",
              justifyContent: "space-between",
              alignItems: screenSize.isMobile ? "flex-start" : "center",
              gap: "20px",
            }}
          >
            <span
              style={{
                fontSize: emailFontSize,
                color: "#c0151f",
                fontFamily: "'Outfit', sans-serif",
                fontStyle: "normal",
              }}
            >
              Emails :{" "}
              <a
                href="mailto:amna.shabbir@globalpharmaceuticalspk.com"
                style={{ color: "#c0151f", textDecoration: "none" , fontSize: emailFontSize}}
              >
                amna.shabbir@globalpharmaceuticalspk.com
              </a>
            </span>
            {/* <button
              onClick={() => setShowForm(true)}
              style={{
                background: "#c0151f",
                color: "#fff",
                border: "none",
                padding: "10px 24px",
                fontSize: "16px",
                fontWeight: "bold",
                borderRadius: "6px",
                cursor: "pointer",
                transition: "background 0.3s ease",
              }}
              onMouseOver={(e) => e.target.style.background = "#a01319"}
              onMouseOut={(e) => e.target.style.background = "#c0151f"}
            >
              Submit Report
            </button> */}
          </div>
        </>
      ) : (
        /* Form View */
        <div>
          <h2
            style={{
              color: "#c0151f",
              fontSize: fontSize,
              fontWeight: "bold",
              margin: "0 0 6px 0",
              fontFamily: "'Outfit', sans-serif",
              letterSpacing: "0.2px",
            }}
          >
            Pharmacovigilance Report
          </h2>

          {/* Red underline */}
          <div
            style={{
              width: "38px",
              height: "2.5px",
              background: "#c0151f",
              marginBottom: marginBottom,
            }}
          />

          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: screenSize.isMobile ? "1fr" : "1fr 1fr",
                gap: "20px",
              }}
            >
              <div>
                <label
                  style={{
                    fontSize: formFontSize,
                    fontWeight: "bold",
                    color: "#333",
                    display: "block",
                    marginBottom: "6px",
                  }}
                >
                  Name *
                </label>
                <input
                  type="text"
                  name="reporterName"
                  value={formData.reporterName}
                  onChange={handleChange}
                  placeholder="Your name"
                  style={{
                    width: "100%",
                    padding: "10px 12px",
                    fontSize: formFontSize,
                    border: "1px solid #ddd",
                    borderRadius: "6px",
                    fontFamily: "'Outfit', sans-serif",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    fontSize: formFontSize,
                    fontWeight: "bold",
                    color: "#333",
                    display: "block",
                    marginBottom: "6px",
                  }}
                >
                  Email *
                </label>
                <input
                  type="email"
                  name="reporterEmail"
                  value={formData.reporterEmail}
                  onChange={handleChange}
                  placeholder="Your email"
                  style={{
                    width: "100%",
                    padding: "10px 12px",
                    fontSize: formFontSize,
                    border: "1px solid #ddd",
                    borderRadius: "6px",
                    fontFamily: "'Outfit', sans-serif",
                    boxSizing: "border-box",
                  }}
                />
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: screenSize.isMobile ? "1fr" : "1fr 1fr",
                gap: "20px",
              }}
            >
              <div>
                <label
                  style={{
                    fontSize: formFontSize,
                    fontWeight: "bold",
                    color: "#333",
                    display: "block",
                    marginBottom: "6px",
                  }}
                >
                  Phone
                </label>
                <input
                  type="tel"
                  name="reporterPhone"
                  value={formData.reporterPhone}
                  onChange={handleChange}
                  placeholder="Your phone number"
                  style={{
                    width: "100%",
                    padding: "10px 12px",
                    fontSize: formFontSize,
                    border: "1px solid #ddd",
                    borderRadius: "6px",
                    fontFamily: "'Outfit', sans-serif",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    fontSize: formFontSize,
                    fontWeight: "bold",
                    color: "#333",
                    display: "block",
                    marginBottom: "6px",
                  }}
                >
                  Report Type
                </label>
                <select
                  name="reportType"
                  value={formData.reportType}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "10px 12px",
                    fontSize: formFontSize,
                    border: "1px solid #ddd",
                    borderRadius: "6px",
                    fontFamily: "'Outfit', sans-serif",
                    boxSizing: "border-box",
                  }}
                >
                  <option value="">Select type</option>
                  <option value="Adverse Reaction">Adverse Reaction</option>
                  <option value="Side Effect">Side Effect</option>
                  <option value="Drug Interaction">Drug Interaction</option>
                  <option value="Product Quality">Product Quality</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label
                style={{
                  fontSize: formFontSize,
                  fontWeight: "bold",
                  color: "#333",
                  display: "block",
                  marginBottom: "6px",
                }}
              >
                Product Name
              </label>
              <input
                type="text"
                name="productName"
                value={formData.productName}
                onChange={handleChange}
                placeholder="Product name"
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  fontSize: formFontSize,
                  border: "1px solid #ddd",
                  borderRadius: "6px",
                  fontFamily: "'Outfit', sans-serif",
                  boxSizing: "border-box",
                }}
              />
            </div>

            <div>
              <label
                style={{
                  fontSize: formFontSize,
                  fontWeight: "bold",
                  color: "#333",
                  display: "block",
                  marginBottom: "6px",
                }}
              >
                Report Details *
              </label>
              <textarea
                name="reportDetails"
                value={formData.reportDetails}
                onChange={handleChange}
                placeholder="Describe the adverse event or issue in detail..."
                rows={6}
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  fontSize: formFontSize,
                  border: "1px solid #ddd",
                  borderRadius: "6px",
                  fontFamily: "'Outfit', sans-serif",
                  boxSizing: "border-box",
                  resize: "vertical",
                }}
              />
            </div>

            {/* Success Message */}
            {submitMessage && (
              <div
                style={{
                  padding: "12px",
                  background: "#d4edda",
                  border: "1px solid #c3e6cb",
                  borderRadius: "6px",
                  color: "#155724",
                  fontSize: formFontSize,
                }}
              >
                ✅ {submitMessage}
              </div>
            )}

            {/* Error Message */}
            {submitError && (
              <div
                style={{
                  padding: "12px",
                  background: "#f8d7da",
                  border: "1px solid #f5c6cb",
                  borderRadius: "6px",
                  color: "#721c24",
                  fontSize: formFontSize,
                }}
              >
                ❌ {submitError}
              </div>
            )}

            <div
              style={{
                display: "flex",
                gap: "12px",
                justifyContent: "flex-end",
              }}
            >
              <button
                type="button"
                onClick={() => setShowForm(false)}
                style={{
                  background: "#6c757d",
                  color: "#fff",
                  border: "none",
                  padding: "10px 24px",
                  fontSize: formFontSize,
                  fontWeight: "bold",
                  borderRadius: "6px",
                  cursor: "pointer",
                  transition: "background 0.3s ease",
                }}
                onMouseOver={(e) => (e.target.style.background = "#5a6268")}
                onMouseOut={(e) => (e.target.style.background = "#6c757d")}
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  background: isSubmitting ? "#999" : "#c0151f",
                  color: "#fff",
                  border: "none",
                  padding: "10px 24px",
                  fontSize: formFontSize,
                  fontWeight: "bold",
                  borderRadius: "6px",
                  cursor: isSubmitting ? "not-allowed" : "pointer",
                  transition: "background 0.3s ease",
                }}
                onMouseOver={(e) =>
                  !isSubmitting && (e.target.style.background = "#a01319")
                }
                onMouseOut={(e) =>
                  !isSubmitting && (e.target.style.background = "#c0151f")
                }
              >
                {isSubmitting ? "Submitting..." : "Submit Report"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
