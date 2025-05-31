
import React from 'react';
import { Mail } from 'lucide-react';
import { contactInfo } from './contactData';

const ContactInfo = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border border-gray-200 shadow-lg">
      <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
        <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
          <Mail size={16} className="text-white" />
        </div>
        Get In Touch
      </h3>
      
      <div className="space-y-6">
        {contactInfo.map((contact, index) => (
          <a
            key={index}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300"
          >
            <div className={`w-12 h-12 bg-gradient-to-r ${contact.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
              <contact.icon size={20} className="text-white" />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-500">{contact.label}</div>
              <div className="font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">
                {contact.value}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
