"use client";
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FiMail, FiPhone, FiSend, FiClock } from 'react-icons/fi';
import { FaWhatsapp, FaInstagram, FaLinkedin, FaFacebook, FaYoutube } from 'react-icons/fa';

// Direct Channels
const contactInfo = [
  { icon: FiMail, label: 'Email Us', value: 'info@wiriqtech.com', href: 'mailto:info@wiriqtech.com' },
  { icon: FaWhatsapp, label: 'WhatsApp (Fastest Response)', value: '+254 110 464 100', href: 'https://wa.me/254110464100' },
  { icon: FiPhone, label: 'Call Us', value: '+254 110 464 100', href: 'tel:+254110464100' },
];

// Social Links
const socialLinks = [
  { icon: FaInstagram, label: 'Instagram', href: 'https://instagram.com/wiriqtech' },
  { icon: FaLinkedin, label: 'LinkedIn', href: 'https://linkedin.com/company/wiriqtech' },
  { icon: FaFacebook, label: 'Facebook', href: 'https://facebook.com/wiriqtech' },
  { icon: FaYoutube, label: 'YouTube', href: 'https://youtube.com/@wiriqtech' },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS Integration
      await emailjs.sendForm(
        'service_0gnbbon',   // Replace with your Zoho Service ID from EmailJS
        'template_tlvt77g',  // Replace with your Template ID from EmailJS
        e.currentTarget,     // Grabs all form data automatically
        'RdJ5KgaKz54E-sdOf'    // Replace with your Public Key from EmailJS
      );

      setIsSuccess(true);
      // Clear the form fields after successful submission
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      console.error('FAILED...', error);
      alert("Something went wrong. Please check your connection.");
    }

    setIsSubmitting(false);
    setTimeout(() => setIsSuccess(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-gray-50 dark:bg-gray-950">
      
      {/* Background ambient gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#b6ff1c]/5 to-transparent pointer-events-none" />

      <div className="w-[90%] xl:w-[80%] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-green-700 dark:text-[#b6ff1c] font-mono text-sm uppercase tracking-widest mb-4">Contact Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-400 dark:from-[#b6ff1c] dark:to-green-400">Great</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Ready to start your project? Reach out to us for full-stack web development, software solutions, and technical infrastructure.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Contact Form */}
          <div className="relative p-6 md:p-8 rounded-2xl bg-white dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200 dark:border-gray-800 shadow-[0_0_40px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_40px_-15px_rgba(182,255,28,0.05)]">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <FiSend className="w-5 h-5 text-green-600 dark:text-[#b6ff1c]" />
              Send an Inquiry
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
                  <input
                    id="name" name="name" type="text" required placeholder="John Doe"
                    value={formData.name} onChange={handleChange}
                    className="w-full bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 focus:border-green-500 dark:focus:border-[#b6ff1c] focus:ring-1 focus:ring-green-500 dark:focus:ring-[#b6ff1c] rounded-xl px-4 py-3 outline-none transition-colors text-gray-900 dark:text-white placeholder-gray-400"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                  <input
                    id="email" name="email" type="email" required placeholder="john@example.com"
                    value={formData.email} onChange={handleChange}
                    className="w-full bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 focus:border-green-500 dark:focus:border-[#b6ff1c] focus:ring-1 focus:ring-green-500 dark:focus:ring-[#b6ff1c] rounded-xl px-4 py-3 outline-none transition-colors text-gray-900 dark:text-white placeholder-gray-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Phone Number</label>
                  <input
                    id="phone" name="phone" type="tel" placeholder="+254 700 000 000"
                    value={formData.phone} onChange={handleChange}
                    className="w-full bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 focus:border-green-500 dark:focus:border-[#b6ff1c] focus:ring-1 focus:ring-green-500 dark:focus:ring-[#b6ff1c] rounded-xl px-4 py-3 outline-none transition-colors text-gray-900 dark:text-white placeholder-gray-400"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                  <input
                    id="subject" name="subject" type="text" required placeholder="Project inquiry"
                    value={formData.subject} onChange={handleChange}
                    className="w-full bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 focus:border-green-500 dark:focus:border-[#b6ff1c] focus:ring-1 focus:ring-green-500 dark:focus:ring-[#b6ff1c] rounded-xl px-4 py-3 outline-none transition-colors text-gray-900 dark:text-white placeholder-gray-400"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea
                  id="message" name="message" required rows={4} placeholder="Tell us what's on your mind..."
                  value={formData.message} onChange={handleChange}
                  className="w-full bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 focus:border-green-500 dark:focus:border-[#b6ff1c] focus:ring-1 focus:ring-green-500 dark:focus:ring-[#b6ff1c] rounded-xl px-4 py-3 outline-none transition-colors text-gray-900 dark:text-white placeholder-gray-400 resize-none"
                />
              </div>

              {isSuccess && (
                <div className="p-3 text-sm rounded-lg bg-green-100 dark:bg-[#b6ff1c]/10 text-green-700 dark:text-[#b6ff1c] border border-green-200 dark:border-[#b6ff1c]/20">
                  Message sent successfully! We will get back to you shortly.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-4 flex items-center justify-center gap-2 rounded-xl font-bold text-gray-950 uppercase tracking-wide bg-gradient-to-r from-[#b6ff1c] to-green-500 hover:to-green-400 transition-all duration-300 shadow-[0_0_20px_rgba(182,255,28,0.2)] hover:shadow-[0_0_30px_rgba(182,255,28,0.4)] disabled:opacity-70"
              >
                {isSubmitting ? 'Transmitting...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Info Side */}
          <div className="space-y-8 lg:pl-6">
            
            {/* Response Time Notice */}
            <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#b6ff1c] to-green-600"></div>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-green-50 dark:bg-gray-800 text-green-600 dark:text-[#b6ff1c]">
                  <FiClock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Our Response Time</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                    We process web inquiries promptly. Expect a reply within <strong className="text-gray-900 dark:text-white">12 hours on weekdays</strong> and <strong className="text-gray-900 dark:text-white">24 hours on weekends</strong>.
                  </p>
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-300">
                    Need immediate assistance? <span className="text-green-600 dark:text-[#b6ff1c]">WhatsApp</span> and <span className="text-green-600 dark:text-[#b6ff1c]">Phone calls</span> are our fastest communication channels.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Channels */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Direct Channels</h3>
              <div className="grid gap-4">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.icon === FaWhatsapp ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 hover:border-green-500/50 dark:hover:border-[#b6ff1c]/50 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 flex items-center justify-center group-hover:scale-110 group-hover:border-[#b6ff1c]/50 transition-all duration-300">
                      <item.icon className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-green-600 dark:group-hover:text-[#b6ff1c]" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{item.label}</p>
                      <p className="text-sm font-bold text-gray-900 dark:text-white transition-colors">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Connect With Us</h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 flex items-center justify-center hover:border-green-500 dark:hover:border-[#b6ff1c] hover:-translate-y-1 transition-all duration-300 group title-tooltip"
                    title={item.label}
                  >
                    <item.icon className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-green-600 dark:group-hover:text-[#b6ff1c] transition-colors" />
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;