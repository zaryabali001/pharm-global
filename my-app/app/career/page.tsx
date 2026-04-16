"use client"

import { motion } from "motion/react";
import Image from "next/image";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { AnimatedSection, AnimatedText } from "../component/AnimatedSection";
import { Search, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

interface Job {
  id: number;
  title: string;
  date: string;
  type: string;
}

const MOCK_JOBS: Job[] = [
  { id: 1, title: 'Associate Manager Learning & Development', date: 'Mar 22, 2026', type: 'Permanent' },
  { id: 2, title: 'Associate Manager Learning & Development', date: 'Mar 22, 2026', type: 'Permanent' },
  { id: 3, title: 'Associate Manager Learning & Development', date: 'Mar 22, 2026', type: 'Permanent' },
  { id: 4, title: 'Associate Manager Learning & Development', date: 'Mar 22, 2026', type: 'Permanent' },
  { id: 5, title: 'Associate Manager Learning & Development', date: 'Mar 22, 2026', type: 'Permanent' },
  { id: 6, title: 'Associate Manager Learning & Development', date: 'Mar 22, 2026', type: 'Permanent' },
];

const FilterDropdown = ({ label, options, value, onChange }: { 
  label: string; 
  options: string[]; 
  value: string; 
  onChange: (val: string) => void 
}) => (
  <div className="flex flex-col gap-1.5 w-full text-black">
    <label className="text-[13px] font-bold uppercase tracking-wider text-gray-700">{label}</label>
    <div className="relative group">
      <select 
        aria-label={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full appearance-none bg-white border border-gray-200 rounded-md py-3 px-4 pr-10 text-[16px] text-gray-700 focus:outline-none focus:ring-1 focus:border-red-800 transition-all cursor-pointer"
      >
        <option value="">All</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none group-hover:text-gray-600 transition-colors" />
    </div>
  </div>
);

export default function Career() {
  const [mounted, setMounted] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    jobTitle: '',
    employment: '',
    company: '',
    department: '',
    city: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [selectedJobForApplication, setSelectedJobForApplication] = useState<number | null>(null);
  const [applicationData, setApplicationData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: '',
    coverLetter: '',
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleFilterChange = (filterName: string, value: string) => {
    setFilters((prev) => ({ ...prev, [filterName]: value }));
  };

  const handleSubmitFilters = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitMessage(null);

    try {
      const response = await fetch('/api/career', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'submit',
          searchQuery: searchTerm,
          ...filters,
        }),
      });

      if (!response.ok) throw new Error('Failed to submit');

      setSubmitMessage({
        type: 'success',
        message: '✓ Job search submitted successfully! Our team will review your request.',
      });
      
      setSearchTerm('');
      setFilters({ jobTitle: '', employment: '', company: '', department: '', city: '' });
      
      setTimeout(() => setSubmitMessage(null), 5000);
    } catch {
      setSubmitMessage({
        type: 'error',
        message: 'Failed to submit. Please try again.',
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleApplyJob = async (jobId: number, jobTitle: string) => {
    if (!applicationData.fullName || !applicationData.email) {
      setSubmitMessage({
        type: 'error',
        message: 'Please fill in your name and email before applying.',
      });
      return;
    }

    setSubmitting(true);
    setSubmitMessage(null);

    try {
      const response = await fetch('/api/career', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'apply',
          jobTitle: jobTitle,
          ...applicationData,
        }),
      });

      if (!response.ok) throw new Error('Failed to apply');

      setSubmitMessage({
        type: 'success',
        message: '✓ Application submitted successfully! We will review your application soon.',
      });

      setApplicationData({ fullName: '', email: '', phone: '', experience: '', coverLetter: '' });
      setSelectedJobForApplication(null);

      setTimeout(() => setSubmitMessage(null), 5000);
    } catch {
      setSubmitMessage({
        type: 'error',
        message: 'Failed to submit application. Please try again.',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Header />

      <section className="relative flex flex-col md:flex-row items-center bg-gray-100 overflow-hidden">
        <div className="w-full md:w-1/2 p-8 md:p-16 lg:p-24 bg-gray-100 z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-[#9D0B0F] mb-6"
          >
            Career Portal
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-sans text-[18px] text-[#1F2937] max-w-xl"
          >
            From a small marketing venture to one of Pakistan&rsquo;s fast-growing pharmaceutical manufacturers producing a wide range of medicines and healthcare products for patients across the country.
          </motion.p>
        </div>
        <div className="w-full md:w-1/2 h-75 md:h-125 relative">
          <Image
            src="/career.webp"
            alt="Pharmaceutical Production"
            fill
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <div className="min-h-screen bg-white p-6 md:p-12 font-sans">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <AnimatedSection>
              <h2 className="text-5xl font-bold text-[#9D0B0F] mb-4">
                Career Opportunities
              </h2>
            </AnimatedSection>
            <AnimatedText delay={0.1}>
              <p className="text-[16px] md:text-[18px] text-gray-600 max-w-2xl">
                Join our team and be part of a growing pharmaceutical company committed to excellence and innovation
              </p>
            </AnimatedText>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-8 gap-16">
            {/* Sidebar Filters */}
            <aside className="lg:col-span-4 space-y-6 bg-transparent">
              <AnimatedSection>
                <form onSubmit={handleSubmitFilters} className="space-y-6">
                  {/* Job Search Input */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[13px] font-bold text-gray-700 uppercase tracking-wider">Job Search</label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-white border border-gray-200 rounded-md py-3 pl-11 pr-4 text-[16px] text-gray-700 focus:outline-none focus:ring-1 focus:border-red-800 transition-all placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  {/* Dropdowns */}
                  <FilterDropdown 
                    label="Job Title" 
                    options={['Training Manager', 'Group Product Manager', 'Associate Manager Group Legal']}
                    value={filters.jobTitle}
                    onChange={(val) => handleFilterChange('jobTitle', val)}
                  />
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FilterDropdown 
                      label="Employment" 
                      options={['Permanent']}
                      value={filters.employment}
                      onChange={(val) => handleFilterChange('employment', val)}
                    />
                    <FilterDropdown 
                      label="Company" 
                      options={['Martin Dow']}
                      value={filters.company}
                      onChange={(val) => handleFilterChange('company', val)}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FilterDropdown 
                      label="Department" 
                      options={['Legal and IP', 'Marketing', 'Sales Training']}
                      value={filters.department}
                      onChange={(val) => handleFilterChange('department', val)}
                    />
                    <FilterDropdown 
                      label="City" 
                      options={['Karachi']}
                      value={filters.city}
                      onChange={(val) => handleFilterChange('city', val)}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={submitting}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-[#9D0B0F] text-white text-[16px] font-bold py-3.5 rounded-md mt-4 shadow-sm hover:bg-[#7a1220] transition-all uppercase tracking-widest disabled:opacity-50"
                  >
                    {submitting ? 'Submitting...' : 'Submit'}
                  </motion.button>

                  {submitMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`p-4 rounded-md text-[16px] font-medium ${
                        submitMessage.type === 'success'
                          ? 'bg-green-50 text-green-800 border border-green-200'
                          : 'bg-red-50 text-red-800 border border-red-200'
                      }`}
                    >
                      {submitMessage.message}
                    </motion.div>
                  )}
                </form>
              </AnimatedSection>
            </aside>

            {/* Job Grid */}
            <main className="lg:col-span-4">
              <AnimatedSection>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {MOCK_JOBS.map((job) => (
                    <motion.div
                      key={job.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: job.id * 0.05 }}
                      className="bg-white text-gray-800 p-8 rounded-xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border border-gray-50 flex flex-col justify-between min-h-60"
                    >
                      <div>
                        <h3 className="text-[#9D0B0F] text-[22px] font-bold leading-[1.2] mb-6">
                          {job.title}
                        </h3>
                        <div className="space-y-2">
                          <p className="text-[16px] font-semibold text-gray-800">{job.date}</p>
                          <p className="text-[16px] text-gray-500">{job.type}</p>
                        </div>
                      </div>
                      
                      <motion.button
                        whileHover={{ backgroundColor: '#A9A9A9', scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        onClick={() => setSelectedJobForApplication(job.id)}
                        className="w-full bg-[#A9A9A9] text-black text-[16px] font-bold py-3 rounded-lg mt-8 transition-all"
                      >
                        Apply
                      </motion.button>
                    </motion.div>
                  ))}
                </div>
              </AnimatedSection>

              {/* Application Modal */}
              {selectedJobForApplication && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
                  onClick={() => setSelectedJobForApplication(null)}
                >
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-white rounded-xl p-8 max-w-md w-full max-h-[85vh] overflow-y-auto"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <h2 className="text-2xl font-bold text-[#911526] mb-6">
                      Apply for: {MOCK_JOBS.find((j) => j.id === selectedJobForApplication)?.title}
                    </h2>

                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleApplyJob(
                          selectedJobForApplication,
                          MOCK_JOBS.find((j) => j.id === selectedJobForApplication)?.title || 'Position'
                        );
                      }}
                      className="space-y-5"
                    >
                      <div>
                        <label className="block text-[16px] font-semibold text-gray-800 mb-2" htmlFor="fullName">
                          Full Name *
                        </label>
                        <input
                          id="fullName"
                          type="text"
                          value={applicationData.fullName}
                          onChange={(e) => setApplicationData({ ...applicationData, fullName: e.target.value })}
                          className="w-full border border-gray-300 rounded-md px-4 py-3 text-[16px] focus:outline-none focus:ring-2 focus:ring-[#911526]"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-[16px] font-semibold text-gray-800 mb-2" htmlFor="email">
                          Email *
                        </label>
                        <input
                          id="email"
                          type="email"
                          value={applicationData.email}
                          onChange={(e) => setApplicationData({ ...applicationData, email: e.target.value })}
                          className="w-full border border-gray-300 rounded-md px-4 py-3 text-[16px] focus:outline-none focus:ring-2 focus:ring-[#911526]"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-[16px] font-semibold text-gray-800 mb-2" htmlFor="phone">
                          Phone
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          value={applicationData.phone}
                          onChange={(e) => setApplicationData({ ...applicationData, phone: e.target.value })}
                          className="w-full border border-gray-300 rounded-md px-4 py-3 text-[16px] focus:outline-none focus:ring-2 focus:ring-[#911526]"
                        />
                      </div>

                      <div>
                        <label className="block text-[16px] font-semibold text-gray-800 mb-2">Years of Experience</label>
                        <input
                          type="text"
                          value={applicationData.experience}
                          onChange={(e) => setApplicationData({ ...applicationData, experience: e.target.value })}
                          className="w-full border border-gray-300 rounded-md px-4 py-3 text-[16px] focus:outline-none focus:ring-2 focus:ring-[#911526]"
                          placeholder="e.g., 5 years"
                        />
                      </div>

                      <div>
                        <label className="block text-[16px] font-semibold text-gray-800 mb-2">Cover Letter</label>
                        <textarea
                          value={applicationData.coverLetter}
                          onChange={(e) => setApplicationData({ ...applicationData, coverLetter: e.target.value })}
                          className="w-full border border-gray-300 rounded-md px-4 py-3 text-[16px] focus:outline-none focus:ring-2 focus:ring-[#911526] min-h-28"
                          placeholder="Tell us about yourself..."
                        />
                      </div>

                      <div className="flex gap-3 pt-6">
                        <motion.button
                          type="submit"
                          disabled={submitting}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex-1 bg-[#911526] text-white font-bold py-3 text-[16px] rounded-lg hover:bg-[#7a1220] transition-all disabled:opacity-50"
                        >
                          {submitting ? 'Submitting...' : 'Submit Application'}
                        </motion.button>
                        <motion.button
                          type="button"
                          onClick={() => setSelectedJobForApplication(null)}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex-1 bg-gray-300 text-gray-800 font-bold py-3 text-[16px] rounded-lg hover:bg-gray-400 transition-all"
                        >
                          Cancel
                        </motion.button>
                      </div>

                      {submitMessage && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className={`p-4 rounded-md text-[16px] font-medium ${
                            submitMessage.type === 'success'
                              ? 'bg-green-50 text-green-800 border border-green-200'
                              : 'bg-red-50 text-red-800 border border-red-200'
                          }`}
                        >
                          {submitMessage.message}
                        </motion.div>
                      )}
                    </form>
                  </motion.div>
                </motion.div>
              )}
            </main>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}