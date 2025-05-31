
import React from 'react';
import { BarChart3, Database, Target, Zap, Cloud, Brain, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Business Analysis',
      description: 'Requirements gathering, stakeholder engagement, and Agile/Scrum methodology implementation.',
      outcomes: 'Improved project delivery by 30%',
      icon: BarChart3,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      title: 'Data Analysis & Reporting',
      description: 'Power BI dashboards, SQL automation, and comprehensive cohort analysis.',
      outcomes: 'Enhanced reporting accuracy by 25%',
      icon: Database,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      title: 'Strategic Consulting',
      description: 'KPI alignment, root cause analysis, and strategic business planning.',
      outcomes: 'Increased operational efficiency by 40%',
      icon: Target,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    {
      title: 'Agile Project Management',
      description: 'Sprint planning, risk mitigation, and cross-functional team leadership.',
      outcomes: 'Reduced project risks by 35%',
      icon: Zap,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200'
    },
    {
      title: 'Salesforce Optimization',
      description: 'Configuration, automation, and workflow optimization for maximum efficiency.',
      outcomes: 'Boosted candidate matching by 15%',
      icon: Cloud,
      color: 'from-teal-500 to-teal-600',
      bgColor: 'bg-teal-50',
      borderColor: 'border-teal-200'
    },
    {
      title: 'Critical Thinking & Problem-Solving',
      description: 'Complex problem decomposition and innovative solution development.',
      outcomes: 'Solved 95% of critical issues within SLA',
      icon: Brain,
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200'
    }
  ];

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/20 rounded-full text-sm font-medium text-primary mb-6">
            <Target size={16} />
            Professional Services
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Solutions for
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent block">
              Business Excellence
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Delivering measurable results through strategic analysis, innovative problem-solving, and data-driven insights across multiple industries.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6 rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-white p-8 rounded-3xl border-2 ${service.borderColor} hover:border-transparent hover:shadow-2xl transition-all duration-500 animate-scale-in transform hover:-translate-y-2`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-95 rounded-3xl transition-all duration-500`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-all duration-300`}>
                  <service.icon size={32} className={`bg-gradient-to-r ${service.color} bg-clip-text text-transparent group-hover:text-white transition-all duration-300`} />
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                  {service.description}
                </p>
                
                {/* Impact Badge */}
                <div className="bg-gradient-to-r from-accent/10 to-primary/10 group-hover:from-white/20 group-hover:to-white/10 p-4 rounded-2xl border border-accent/20 group-hover:border-white/30 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-accent rounded-full group-hover:bg-white"></div>
                    <span className="text-sm font-medium text-accent group-hover:text-white">Proven Impact</span>
                  </div>
                  <p className="text-sm font-semibold text-gray-700 group-hover:text-gray-100">
                    {service.outcomes}
                  </p>
                </div>
                
                {/* Hover arrow */}
                <div className="flex items-center gap-2 mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <span className="text-white font-medium">Learn More</span>
                  <ArrowRight size={16} className="text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-gradient-to-r from-primary/5 via-white to-accent/5 p-8 rounded-3xl border border-gray-200 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Business?</h3>
            <p className="text-gray-600 mb-6">Let's discuss how these services can drive measurable results for your organization.</p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-xl hover:shadow-xl transition-all duration-300 font-medium group"
            >
              Start a Conversation
              <ArrowRight size={20} className="inline ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
