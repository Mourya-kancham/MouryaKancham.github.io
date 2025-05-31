
import React from 'react';
import { Send } from 'lucide-react';
import ContactForm from './contact/ContactForm';
import ContactInfo from './contact/ContactInfo';
import AvailabilityCard from './contact/AvailabilityCard';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/20 rounded-full text-sm font-medium text-primary mb-6">
            <Send size={16} />
            Let's Connect
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Ready to Transform Your
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent block">
              Business Challenges?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Let's discuss how we can work together to turn your complex business requirements into scalable, data-driven solutions.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6 rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-8 animate-slide-up">
            <ContactInfo />
            <AvailabilityCard />
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-3 animate-slide-up">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
