'use client';

import { useState } from "react";
import { toast } from "react-toastify";
import { ArrowUpRight } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Temporarily disable API call
      /*
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Message sent successfully! I'll get back to you soon.");
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        toast.error(data.error || 'Failed to send message. Please try again.');
      }
      */

      // Show temporary success message without API
      toast.success("Message sent successfully! (API disabled for now)");
      setFormData({ name: '', email: '', subject: '', message: '' });

    } catch (error) {
      toast.error('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-black text-white min-h-screen w-full">
      <Header />

      {/* ===== CONTACT SECTION ===== */}
      <section className="pt-32 md:pt-40 px-6 overflow-hidden w-full">
        <div className="w-full px-4 md:px-8 lg:px-16">
          <div className="mb-12 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-sm text-gray-300 backdrop-blur-md w-fit border border-white/10 mb-4">
              <span className="text-xs">●</span>
              Get In Touch
            </div>
            <h1 className="text-5xl md:text-6xl font-light tracking-tight leading-tight mb-4">
              Let's <span className="font-semibold text-white">Work Together</span>
            </h1>
            <p className="text-lg text-gray-400">
              Have a project in mind? I'd love to hear from you. Send me a message and I'll respond as soon as possible.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {/* Contact Info */}
            <div className="mb-8 flex flex-wrap gap-4 justify-center">
              <a
                href="mailto:hamnafatima0332@gmail.com"
                className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-lg hover:border-white/20 transition"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm">hamnafatima0332@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/hamna-fatima-462792385"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-lg hover:border-white/20 transition"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="text-sm">LinkedIn Profile</span>
              </a>
            </div>

            <div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-md">
              <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 
                           text-white placeholder-gray-500 focus:outline-none focus:border-white/30 
                           transition backdrop-blur-md"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 
                           text-white placeholder-gray-500 focus:outline-none focus:border-white/30 
                           transition backdrop-blur-md"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 
                           text-white placeholder-gray-500 focus:outline-none focus:border-white/30 
                           transition backdrop-blur-md"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 
                           text-white placeholder-gray-500 focus:outline-none focus:border-white/30 
                           transition backdrop-blur-md resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-black px-6 py-3 border border-gray-700 
                         rounded-full font-medium hover:bg-gray-200 transition text-sm 
                         disabled:opacity-50 disabled:cursor-not-allowed flex items-center 
                         justify-center gap-2"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                {!isSubmitting && <ArrowUpRight className="w-4 h-4" />}
              </button>
            </form>
            </div>
          </div>
        </div>
      </section>
      <div className="pb-20"></div>
      <Footer />
    </div>
  );
}

