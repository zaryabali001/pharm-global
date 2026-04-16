/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import { sendADRFormEmail } from '../actions/sendEmail';

const ContactInfoItem = ({ icon: Icon, title, content }: { icon: any; title: string; content: string[] }) => (
  <div className="flex gap-4">
    <div className="mt-1">
      <Icon className="w-5 h-5 text-[#911526]" />
    </div>
    <div className="space-y-1">
      {title && (
        <h4 className="text-[24px] font-bold text-[#911526] mb-2">{title}</h4>
      )}
      {content.map((line, idx) => (
        <p key={idx} className="text-[16px] text-gray-700 leading-relaxed">
          {line}
        </p>
      ))}
    </div>
  </div>
);

const PartnerLogo = ({ name, subtitle, color, icon }: { name: string; subtitle: string; color: string; icon: string }) => (
  <div className="flex items-center gap-3 group cursor-pointer">
    <div className={`w-12 h-12 border-2 rounded flex items-center justify-center font-bold text-xl transition-all group-hover:scale-105`} style={{ borderColor: color, color: color }}>
      {icon}
    </div>
    <div>
      <h5 className="text-xl font-bold leading-tight" style={{ color: color }}>{name}</h5>
      <p className="text-[16px] font-medium" style={{ color: color }}>{subtitle}</p>
    </div>
  </div>
);

export default function App() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");
    setSubmitError("");

    try {
      if (!formData.name || !formData.email || !formData.message) {
        setSubmitError("Please fill in name, email, and message fields.");
        setIsSubmitting(false);
        return;
      }

      const result = await sendADRFormEmail({
        contactName: formData.name,
        contactEmail: formData.email,
        contactPhone: formData.phone,
        contactMessage: formData.message,
        formType: "Contact Form"
      });

      if (result.success) {
        setSubmitMessage(result.message || "Form submitted successfully!");
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setSubmitMessage(""), 5000);
      } else {
        setSubmitError(result.error || "Failed to send message");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitError("An error occurred while sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white">
      <Header />

      <div className="min-h-screen p-6 md:p-16 font-sans bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Contact Form Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 md:p-12 rounded-2xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-50"
          >
            <div className="mb-8">
              <h2 className="text-5xl font-bold text-gray-900 mb-3">Contact Us</h2>
              <p className="text-[16px] text-gray-500 leading-relaxed">
                You can put your feedback messages sooner we will get reach out to you.
              </p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-1.5">
                <label className="text-[16px] font-bold text-gray-700 uppercase tracking-wider">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full bg-white border border-gray-200 rounded-md py-3 px-4 text-[16px] focus:outline-none focus:ring-1 focus:ring-red-800/10 focus:border-red-800 transition-all placeholder:text-gray-500 text-black"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[16px] font-bold text-gray-700 uppercase tracking-wider">E-mail</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full bg-white border border-gray-200 rounded-md py-3 px-4 text-[16px] focus:outline-none focus:ring-1 focus:ring-red-800/10 focus:border-red-800 transition-all placeholder:text-gray-400 text-black"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[16px] font-bold text-gray-700 uppercase tracking-wider">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone"
                  className="w-full bg-white border border-gray-200 rounded-md py-3 px-4 text-[16px] focus:outline-none focus:ring-1 focus:ring-red-800/10 focus:border-red-800 transition-all placeholder:text-gray-400 text-black"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[16px] font-bold text-gray-700 uppercase tracking-wider">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Put your message and your phone number. We will reach out to you."
                  className="w-full bg-white border border-gray-200 rounded-md py-3 px-4 text-[16px] focus:outline-none focus:ring-1 focus:ring-red-800/10 focus:border-red-800 transition-all placeholder:text-gray-400 resize-none text-black"
                />
              </div>

              {/* Success Message */}
              {submitMessage && (
                <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-md text-[16px]">
                  ✅ {submitMessage}
                </div>
              )}

              {/* Error Message */}
              {submitError && (
                <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-md text-[16px]">
                  ❌ {submitError}
                </div>
              )}

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className={`w-full text-white text-[16px] font-bold py-3.5 rounded-md mt-6 shadow-sm transition-all uppercase tracking-widest ${
                  isSubmitting 
                    ? "bg-gray-400 cursor-not-allowed" 
                    : "bg-[#911526] hover:bg-[#7a1220]"
                }`}
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </motion.button>
            </form>
          </motion.div>

          {/* Right Side: Contact Details & Partners */}
          <div className="space-y-16 py-4 text-[18px]">
            
            {/* Offices Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="space-y-10 "
              >
                <ContactInfoItem 
                  icon={MapPin} 
                  title="Head Office" 
                  content={["Plot 22-23, Industrial triangle,", "Kahuta Road, Islamabad"]} 
                  // classsName="text-gray-700 text-[14px] leading-relaxed"
                />
                <ContactInfoItem 
                  icon={Phone} 
                  title="" 
                  content={["+92 51 449 3022-24", "+92 51 449 3027", "+92 51 449 3025"]} 
                />
                <ContactInfoItem 
                  icon={Mail} 
                  title="" 
                  content={["info@globalpharmaceuticalspk.com", "kanwal@globalpharmaceuticalspk.com", "saeed@globalpharmaceuticalspk.com"]} 
                />
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-10"
              >
                <ContactInfoItem 
                  icon={MapPin} 
                  title="Factory" 
                  content={["Plot 22-23, Industrial triangle,", "Kahuta Road, Islamabad"]} 
                />
                <ContactInfoItem 
                  icon={Phone} 
                  title="" 
                  content={["+92 51 449 3022-24", "+92 51 449 3027", "+92 51 449 3025"]} 
                />
                <ContactInfoItem 
                  icon={Mail} 
                  title="" 
                  content={["info@globalpharmaceuticalspk.com", "kanwal@globalpharmaceuticalspk.com", "saeed@globalpharmaceuticalspk.com"]} 
                />
              </motion.div>
            </div>

            {/* Partners Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-8 pt-8 border-t border-gray-200"
            >
              <h3 className="text-2xl font-bold text-gray-800">
                Our Trusted Group Companies and Strategic Partners
              </h3>
              
              <div className="space-y-8">
                {/* Global Pharmaceuticals Pakistan */}
                <Link href="/" className="block">
                  <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-16 h-16 flex-shrink-0 rounded-xl flex items-center justify-center text-3xl font-bold text-white">
                      <img src="/one0.png" alt="Global Pharmaceuticals Pakistan" className="w-full h-full object-contain" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-[17px] leading-tight text-red-900">
                        Global Pharmaceuticals Pakistan
                      </p>
                    </div>
                  </div>
                </Link>

                {/* Vision Pharmaceuticals (Pvt) Ltd. */}
                <Link href="/" className="block">
                  <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-16 h-16 shrink-0 rounded-xl flex items-center justify-center text-3xl font-bold">
                      <img src="/two2.png" alt="Vision Pharmaceuticals (Pvt) Ltd." className="w-full h-full object-contain" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-[17px] leading-tight text-green-900">
                        Vision Pharmaceuticals (Pvt) Ltd.
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}