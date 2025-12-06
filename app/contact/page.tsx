'use client';
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, CheckCircle, Linkedin } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    customService: '',
    budget: '',
    message: '',
    whereDidYouHearAboutUs: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // await new Promise(resolve => setTimeout(resolve, 2000));
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(
        { ...formData }
      ),
    });

    const data = await res.json();
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-black pt-16 flex items-center justify-center font-mono">
        <div className="max-w-md mx-auto text-center">
          <div className="bg-gray-900/70 border border-gray-800 rounded-xl p-8">
            <CheckCircle className="h-16 w-16 text-lime-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-2">Message Sent!</h2>
            <p className="text-gray-400 mb-6">
              Thank you for reaching out. Well get back to you within 24 hours.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  name: '',
                  email: '',
                  company: '',
                  service: '',
                  customService: '',
                  budget: '',
                  message: '',
                  whereDidYouHearAboutUs: ''
                });
              }}
              className="text-lime-400 hover:text-white transition-colors font-semibold"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black pt-16 font-mono">
      {/* Hero Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Get In <span className="text-lime-400">Touch</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Ready to transform your ideas into reality? Lets discuss your project and create something amazing together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-900/70 border border-gray-800 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Start Your Project</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-colors"
                      placeholder="john@gmail.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-colors"
                    placeholder="Company Inc."
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="blockchain">Blockchain Development</option>
                      <option value="fullstack">Full Stack Development</option>
                      <option value="application">Application Development - Android / iOS</option>
                      <option value="web3">Web3 Solutions</option>
                      <option value="ai">AI & Machine Learning</option>
                      <option value="backend">Backend Architecture</option>
                      <option value="security">Security & Auditing</option>
                      <option value="custom">Custom Solutions</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                      Project Budget
                    </label>

                    <input
                      type="text"
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-colors"
                      placeholder="$XXX"
                    />
                  </div>
                </div>

                {/* Custom Service Field - Shows only when "Custom Solutions" is selected */}
                {formData.service === 'custom' && (
                  <div>
                    <label htmlFor="customService" className="block text-sm font-medium text-gray-300 mb-2">
                      Describe Your Custom Service Needs *
                    </label>
                    <input
                      type="text"
                      id="customService"
                      name="customService"
                      required={formData.service === 'custom'}
                      value={formData.customService}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-colors"
                      placeholder="e.g., E-commerce platform, CRM system, API integration, etc."
                    />
                  </div>
                )}

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Project Description *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-colors"
                    placeholder="Tell us about your project, goals, and requirements..."
                  />
                </div>
                <div>
                  <label htmlFor="whereDidYouHearAboutUs" className="block text-sm font-medium text-gray-300 mb-2">
                    Where Did You Hear About Us?
                  </label>
                  <input
                    type="text"
                    id="whereDidYouHearAboutUs"
                    name="whereDidYouHearAboutUs"
                    value={formData.whereDidYouHearAboutUs}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-colors"
                    placeholder="X, LinkedIn, Referral, etc."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center px-6 py-4 border border-lime-400 text-lime-400 font-semibold rounded-full hover:bg-lime-400 hover:text-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-lime-400 mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-gray-900/70 border border-gray-800 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-lime-400 mr-4 mt-1" />
                    <div>
                      <h4 className="text-white font-medium">Email</h4>
                      <a href="mailto:realpiyush2525@gmail.com" className="text-lime-400 hover:text-lime-300 transition-colors">
                        realpiyush2525@gmail.com
                      </a>
                    </div>
                  </div>
                  {/* <div className="flex items-start">
                    <Phone className="h-6 w-6 text-lime-400 mr-4 mt-1" />
                    <div>
                      <h4 className="text-white font-medium">Phone</h4>
                      <p className="text-gray-400">+1 (555) 123-4567</p>
                    </div>
                  </div> */}
                  <div className="flex items-start">
                    <Linkedin className="h-6 w-6 text-lime-400 mr-4 mt-1" />
                    <div>
                      <h4 className="text-white font-medium">Connect on LinkedIn</h4>
                      <a href="https://www.linkedin.com/in/vyankatesh-rohokale-695b342a7/" target="_blank" rel="noopener noreferrer" className="text-lime-400 hover:text-lime-300 transition-colors">
                        @vyankatesh-rohokale
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/70 border border-gray-800 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-white mb-4">What Happens Next?</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-lime-400 text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</div>
                    <div>
                      <h4 className="text-white font-medium">Initial Consultation</h4>
                      <p className="text-gray-400 text-sm">Well schedule a call to discuss your project requirements</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-lime-400 text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</div>
                    <div>
                      <h4 className="text-white font-medium">Proposal & Timeline</h4>
                      <p className="text-gray-400 text-sm">Detailed project proposal with timeline and milestones</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-lime-400 text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</div>
                    <div>
                      <h4 className="text-white font-medium">Development Starts</h4>
                      <p className="text-gray-400 text-sm">Begin development with regular updates and reviews</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}