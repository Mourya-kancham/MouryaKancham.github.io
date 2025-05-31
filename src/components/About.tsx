import React from 'react';
import { GraduationCap, Target, Heart, Lightbulb, Users, Globe, Star } from 'lucide-react';
const About = () => {
  const skills = [{
    category: 'Analytics Tools',
    items: ['Power BI', 'SQL', 'Salesforce', 'Tableau'],
    color: 'bg-blue-100 text-blue-800'
  }, {
    category: 'Development',
    items: ['Java', 'Python', 'JavaScript', 'CRM Systems'],
    color: 'bg-green-100 text-green-800'
  }, {
    category: 'Leadership & Management',
    items: ['Team Leadership', 'Cross-functional Management', 'Strategic Planning', 'Stakeholder Engagement'],
    color: 'bg-purple-100 text-purple-800'
  }, {
    category: 'Project Management',
    items: ['Agile', 'Scrum', 'SDLC', 'Jira'],
    color: 'bg-orange-100 text-orange-800'
  }];
  const values = [{
    icon: Heart,
    title: 'Empathy',
    description: 'Understanding stakeholder needs deeply and leading with humanized approach'
  }, {
    icon: Lightbulb,
    title: 'Strategic Innovation',
    description: 'Always seeking innovative solutions through critical thinking and smart strategy'
  }, {
    icon: Users,
    title: 'Team Leadership',
    description: 'Proven ability to lead diverse teams and foster collaborative success'
  }, {
    icon: Globe,
    title: 'Global Vision',
    description: 'Aspiring to work globally with cross-cultural adaptability and diverse perspectives'
  }];
  const leadershipStats = [{
    number: '58+',
    label: 'Professionals Led'
  }, {
    number: '6',
    label: 'Organizations'
  }, {
    number: '4',
    label: 'Industries'
  }, {
    number: '7+',
    label: 'Years Leadership'
  }];
  return <section id="about" className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-primary/20 rounded-full text-sm font-medium text-primary shadow-lg mb-6">
            <Target size={16} />
            About Mourya
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Transforming Business Through
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent block">
              Leadership & Data-Driven Excellence
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        {/* Leadership Stats */}
        <div className="mb-16 animate-fade-in">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {leadershipStats.map((stat, index) => <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>)}
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          <div className="animate-slide-up space-y-8">
            {/* Professional Journey Card */}
            <div className="bg-white/70 backdrop-blur-sm p-10 rounded-3xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center">
                  <GraduationCap size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Professional Journey & Leadership</h3>
              </div>
              
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  As an accomplished Business Analyst and Team Leader with over <span className="font-semibold text-primary">8 years of experience</span>, I specialize in turning complex business challenges into scalable, data-driven solutions while leading diverse teams to success. My leadership journey spans across finance, staffing, agriculture, nonprofit, and technology sectors.
                </p>
                
                <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded-2xl border-l-4 border-primary">
                  <p className="mb-4">
                    I've had the privilege of leading <span className="font-semibold">58+ professionals</span> across organizations such as <span className="font-semibold">SwankTek</span>, <span className="font-semibold">Bridgetown</span>, <span className="font-semibold">Amvotech</span>, and <span className="font-semibold">Deshpande Foundation</span>, where I've consistently delivered measurable outcomes through strategic leadership, stakeholder engagement, and analytical thinking.
                  </p>
                  
                  <p>
                    My approach combines empathy, strategic innovation, and team collaboration – values that drive me to understand not just the 'what' but the 'why' behind business requirements, ensuring solutions that truly resonate with diverse stakeholders and global markets.
                  </p>
                </div>
                
                <div className="bg-primary/5 p-6 rounded-2xl">
                  <div className="flex items-center gap-3 mb-3">
                    <Star size={20} className="text-primary" />
                    <h4 className="font-semibold text-primary text-lg">Early Foundation & Entrepreneurship</h4>
                  </div>
                  <p className="text-gray-700 mb-3">
                    My business acumen developed early through involvement in family business projects and establishing a sericulture business during my teenage years, demonstrating entrepreneurial spirit and hands-on management capabilities.
                  </p>
                  <div className="flex items-center gap-3">
                    <GraduationCap size={20} className="text-primary" />
                    <span className="font-semibold text-primary">Education:</span>
                    <span className="text-gray-700">Bachelor of Science in Agriculture,              Dr. B. R.. Ambedkar University, Agra, Uttar Pradesh, India                                        Graduation Year: 2014 - 2018</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-slide-up space-y-8">
            {/* Core Values */}
            <div className="bg-white/70 backdrop-blur-sm p-10 rounded-3xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Core Values & Leadership Philosophy</h3>
              
              <div className="space-y-6">
                {values.map((value, index) => <div key={index} className="flex items-start gap-4 p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl hover:from-primary/5 hover:to-accent/5 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0">
                      <value.icon size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{value.title}</h4>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </div>)}
              </div>
            </div>
            
            {/* Skills Grid */}
            <div className="bg-white/70 backdrop-blur-sm p-10 rounded-3xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Core Competencies</h3>
              
              <div className="space-y-8">
                {skills.map((skillGroup, index) => <div key={index} className="group">
                    <h4 className="font-semibold text-primary mb-4 text-lg">{skillGroup.category}</h4>
                    <div className="flex flex-wrap gap-3">
                      {skillGroup.items.map((skill, skillIndex) => <span key={skillIndex} className={`${skillGroup.color} px-4 py-2 rounded-full text-sm font-medium transform hover:scale-105 transition-all duration-200 cursor-default shadow-sm`}>
                          {skill}
                        </span>)}
                    </div>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Quote */}
        <div className="text-center animate-fade-in">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary/5 via-white/80 to-accent/5 backdrop-blur-sm p-8 rounded-3xl border border-white/20 shadow-lg">
            <p className="text-xl text-gray-700 italic leading-relaxed">
              "My journey from teenage entrepreneur to leading 58+ professionals across global organizations reflects my passion for strategic innovation, empathetic leadership, and driving meaningful impact through technology and collaboration. I'm excited to bring this experience to global opportunities where diverse perspectives create transformative solutions."
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;