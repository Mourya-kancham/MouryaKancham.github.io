
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Mourya Kancham</h3>
            <p className="text-gray-200 leading-relaxed">
              Business Analyst dedicated to transforming complex challenges into scalable solutions through data-driven insights and strategic thinking.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.getElementById(item.toLowerCase());
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-gray-200 hover:text-white transition-colors duration-300"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Expertise</h4>
            <div className="space-y-2 text-gray-200">
              <p>• Business Analysis</p>
              <p>• Data Analytics</p>
              <p>• Salesforce Optimization</p>
              <p>• Agile Project Management</p>
              <p>• Strategic Consulting</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-gray-200">
            © 2024 Mourya Kancham. All rights reserved. | Built with passion for excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
