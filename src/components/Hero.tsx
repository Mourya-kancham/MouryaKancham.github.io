
import React, { useState } from 'react';
import { ArrowRight, Download, Star, Users, Award } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import CVModal from './CVModal';

const Hero = () => {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  const handleDownloadCV = () => {
    try {
      // Create a link element to trigger download
      const link = document.createElement('a');
      link.href = '/Mourya_Kancham_CV.pdf';
      link.download = 'Mourya_Kancham_CV.pdf';
      link.target = '_blank';
      
      // Append to body, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Show success toast
      toast({
        title: "CV Download Started",
        description: "Your download should begin shortly.",
      });
    } catch (error) {
      console.error('Download error:', error);
      toast({
        title: "Download Failed",
        description: "Please try again or contact me directly for my CV.",
        variant: "destructive",
      });
    }
  };

  const handleViewCV = () => {
    setIsCVModalOpen(true);
  };

  return (
    <>
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Modern gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-accent/5"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-primary/20 to-accent/20 rotate-45 rounded-lg blur-lg animate-bounce delay-500"></div>
        
        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="animate-fade-in space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-primary/20 rounded-full text-sm font-medium text-primary shadow-lg">
                <Star size={16} className="text-accent" />
                7+ Years of Leadership Excellence
              </div>
              
              {/* Main heading */}
              <div className="space-y-4">
                <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                    Mourya
                  </span>
                  <br />
                  <span className="text-gray-800">Kancham</span>
                </h1>
                
                <div className="flex items-center gap-3">
                  <div className="h-1 w-12 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                  <h2 className="text-2xl lg:text-3xl text-gray-600 font-light">
                    Business Analyst & Team Leadership Consultant
                  </h2>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-xl text-gray-700 leading-relaxed max-w-xl">
                Leading <span className="font-semibold text-primary">58+ professionals</span> across global organizations, transforming complex business challenges into 
                <span className="font-semibold text-primary"> scalable solutions </span>
                with proven expertise in finance, staffing, agriculture, and technology sectors.
              </p>
              
              {/* Stats */}
              <div className="flex items-center gap-8 py-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">7+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="w-px h-12 bg-gray-300"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">58+</div>
                  <div className="text-sm text-gray-600">Professionals Led</div>
                </div>
                <div className="w-px h-12 bg-gray-300"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">6</div>
                  <div className="text-sm text-gray-600">Organizations</div>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button onClick={() => scrollToSection('portfolio')} className="group bg-gradient-to-r from-primary to-primary/90 text-white px-8 py-4 rounded-xl hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 font-medium">
                  Explore My Work
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button onClick={() => scrollToSection('contact')} className="border-2 border-primary text-primary px-8 py-4 rounded-xl hover:bg-primary hover:text-white transition-all duration-300 font-medium backdrop-blur-sm bg-white/50">
                  Contact Me
                </button>
                
                <button 
                  onClick={handleViewCV}
                  className="group text-gray-600 hover:text-primary transition-colors duration-300 flex items-center gap-2 px-4 py-4"
                >
                  <Download size={18} />
                  View & Download CV
                </button>
              </div>
            </div>
            
            {/* Right Visual with Profile Picture */}
            <div className="animate-scale-in lg:justify-self-end">
              <div className="relative">
                {/* Main profile card */}
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20 max-w-md mx-auto">
                  {/* Profile image */}
                  <div className="w-48 h-48 mx-auto rounded-2xl overflow-hidden shadow-xl mb-6 ring-4 ring-primary/20">
                    <img src="/lovable-uploads/f8a52c90-d0bd-40ba-a220-a824a908ea61.png" alt="Mourya Kancham - Business Analyst" className="w-full h-full object-cover" />
                  </div>
                  
                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-2 justify-center mb-6">
                    {['Power BI', 'Salesforce', 'Team Leadership', 'SQL'].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  {/* Achievement badges */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl">
                      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                        <Users size={20} className="text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800">Team Leadership Expert</div>
                        <div className="text-sm text-gray-600">Led 58+ professionals across 6 organizations</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-teal-50 rounded-xl">
                      <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                        <Award size={20} className="text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800">Proven Results</div>
                        <div className="text-sm text-gray-600">25% Efficiency Improvement</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-6 -right-6 bg-accent text-white px-4 py-2 rounded-xl text-sm font-medium shadow-lg animate-bounce">
                  Available for Global Projects
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl text-sm font-medium shadow-lg border border-gray-200">
                  ⭐ Strategic Leader & Analyst
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CVModal 
        isOpen={isCVModalOpen} 
        onClose={() => setIsCVModalOpen(false)}
        onDownload={handleDownloadCV}
      />
    </>
  );
};

export default Hero;
