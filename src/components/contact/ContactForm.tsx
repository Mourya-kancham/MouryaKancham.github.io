
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    projectDetails: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      emailjs.init('09kUstoCMEtXpTRBS');

      await emailjs.send(
        'service_4dyg1a5',
        'template_2h5xz8h',
        {
          from_name: formData.name,
          from_email: formData.email,
          to_name: 'Mourya Kancham',
          message: formData.message,
          project_details: formData.projectDetails
        }
      );

      toast({
        title: "Message Sent Successfully! 🚀",
        description: "Thank you for reaching out! I'll get back to you within 24 hours.",
      });

      setFormData({ name: '', email: '', message: '', projectDetails: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      
      toast({
        title: "Message Failed to Send",
        description: "Please try again or contact me directly at kancham.mourya@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-10 rounded-3xl border border-gray-200 shadow-xl">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
          <Send size={16} className="text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900">Send a Message</h3>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              disabled={isSubmitting}
              className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-500 disabled:opacity-50"
              placeholder="Your full name"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              disabled={isSubmitting}
              className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-500 disabled:opacity-50"
              placeholder="your.email@example.com"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3">
            Project Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            disabled={isSubmitting}
            rows={5}
            className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-500 resize-vertical disabled:opacity-50"
            placeholder="Tell me about your project, business challenges, or how I can help..."
          />
        </div>
        
        <div>
          <label htmlFor="projectDetails" className="block text-sm font-semibold text-gray-700 mb-3">
            Additional Project Details
          </label>
          <textarea
            id="projectDetails"
            name="projectDetails"
            value={formData.projectDetails}
            onChange={handleInputChange}
            disabled={isSubmitting}
            rows={4}
            className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-500 resize-vertical disabled:opacity-50"
            placeholder="Timeline, budget, specific requirements, team size, technology preferences..."
          />
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-primary to-accent text-white py-5 rounded-xl hover:shadow-xl transition-all duration-300 font-semibold text-lg group disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>Sending Message...</>
          ) : (
            <>
              Send Message
              <Send size={20} className="inline ml-2 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>
        
        <p className="text-sm text-gray-500 text-center">
          I typically respond within 24 hours. For urgent inquiries, please reach out via LinkedIn.
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
