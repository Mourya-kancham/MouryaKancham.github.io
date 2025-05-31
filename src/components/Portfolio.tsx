import React from 'react';
import { ExternalLink, Calendar, Users, TrendingUp, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'Wealth Management Portal Optimization',
      client: 'SwankTek',
      description: 'Led the development of comprehensive Power BI dashboards and SQL automation for wealth management operations. Implemented Agile UAT processes to ensure seamless user adoption.',
      technologies: ['Power BI', 'SQL', 'Agile', 'UAT'],
      impact: 'Improved data processing efficiency by 45% and reduced manual reporting time by 60%',
      category: 'Finance',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      icon: TrendingUp,
      duration: '6 months',
      teamSize: '8 members'
    },
    {
      title: 'Hiring Pipeline Automation',
      client: 'Bridgetown',
      description: 'Designed and implemented Salesforce-ATS integration with advanced recruitment analytics. Created automated workflows to streamline the hiring process.',
      technologies: ['Salesforce', 'Integration APIs', 'Analytics', 'Automation'],
      impact: 'Boosted candidate matching accuracy by 15% and reduced time-to-hire by 30%',
      category: 'Staffing',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      icon: Users,
      duration: '4 months',
      teamSize: '5 members'
    },
    {
      title: 'Rural Development Impact Tracking',
      client: 'Deshpande Foundation',
      description: 'Developed comprehensive KPI tracking system for donor alignment and program effectiveness measurement. Created real-time dashboards for impact visualization.',
      technologies: ['Data Analytics', 'KPI Framework', 'Dashboards', 'Impact Measurement'],
      impact: 'Enabled 25% growth in funding through improved transparency and impact reporting',
      category: 'Nonprofit',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      icon: Calendar,
      duration: '8 months',
      teamSize: '12 members'
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-primary/20 rounded-full text-sm font-medium text-primary shadow-lg mb-6">
            <TrendingUp size={16} />
            Featured Projects
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Delivering Impact Through
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent block">
              Strategic Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Showcasing transformative projects across diverse industries, each delivering measurable outcomes through innovative analysis and strategic implementation.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6 rounded-full"></div>
        </div>
        
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden hover:shadow-2xl transition-all duration-500 animate-slide-up transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="p-10">
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  {/* Project Info */}
                  <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-center gap-4 flex-wrap">
                      <span className={`${project.bgColor} text-gray-700 px-4 py-2 rounded-full text-sm font-medium border border-gray-200`}>
                        {project.category}
                      </span>
                      <span className="text-gray-500 text-sm font-medium">{project.client}</span>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {project.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users size={14} />
                          {project.teamSize}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="space-y-4">
                      <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                        Technologies & Methodologies
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-gradient-to-r from-accent/10 to-primary/10 text-gray-700 px-4 py-2 rounded-full text-sm font-medium border border-accent/20 hover:border-accent/40 transition-all duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Impact Card */}
                  <div className="relative">
                    <div className={`bg-gradient-to-br ${project.color} p-8 rounded-2xl text-white relative overflow-hidden`}>
                      {/* Background pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-4 right-4 w-20 h-20 border-2 border-white rounded-full"></div>
                        <div className="absolute bottom-4 left-4 w-16 h-16 border border-white rounded-lg rotate-45"></div>
                      </div>
                      
                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                            <project.icon size={24} className="text-white" />
                          </div>
                          <h4 className="text-lg font-semibold">Project Impact</h4>
                        </div>
                        
                        <p className="text-white/90 leading-relaxed text-lg">
                          {project.impact}
                        </p>
                        
                        <div className="mt-6 pt-4 border-t border-white/20">
                          <div className="flex items-center gap-2 text-white/80 hover:text-white transition-colors cursor-pointer group">
                            <span className="text-sm font-medium">View Case Study</span>
                            <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-sm p-10 rounded-3xl border border-white/20 shadow-lg">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Create Your Success Story?</h3>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Let's discuss how we can apply these proven methodologies to transform your business challenges into measurable achievements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-xl hover:shadow-xl transition-all duration-300 font-medium group"
              >
                Start Your Project
                <ArrowRight size={20} className="inline ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-primary text-primary px-8 py-4 rounded-xl hover:bg-primary hover:text-white transition-all duration-300 font-medium">
                Download Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
