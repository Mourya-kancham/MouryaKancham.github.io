import React from 'react';
import { Download, Mail, Linkedin, Github, MapPin, Phone, Calendar, Award, TrendingUp, Users, Code, Database, BarChart3, Briefcase, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';
interface CVDisplayProps {
  onDownload: () => void;
}
const CVDisplay = ({
  onDownload
}: CVDisplayProps) => {
  const handlePrint = () => {
    window.print();
    toast({
      title: "Print Ready",
      description: "Use your browser's print function to save as PDF or print."
    });
  };
  const experiences = [{
    company: "SwankTek",
    location: "Stamford, CT",
    role: "Business Analyst (Contract)",
    duration: "June 2024 – Feb 2025",
    teamSize: "Led a team of 10 professionals",
    achievements: "Improved reporting accuracy by 25% through SQL-based data modeling and Power BI dashboards. Managed cross-functional teams and streamlined global client operations.",
    icon: BarChart3
  }, {
    company: "Bridgetown via CSR Consulting Group",
    location: "New Jersey",
    role: "Business Analyst (Contract)",
    duration: "Jan 2024 – May 2024",
    teamSize: "Led 24 professionals (2 team leads, 20 sales/recruitment staff, 1 HR, 1 accountant)",
    achievements: "Boosted candidate matching efficiency by 15% through Power BI analysis and Salesforce automation. Orchestrated large-scale recruitment operations.",
    icon: Users
  }, {
    company: "Amvotech Solutions Inc",
    location: "Illinois",
    role: "Business Analyst & Associate Developer (Contract)",
    duration: "Mar 2023 – Dec 2023",
    teamSize: "Led 10 professionals (6 developers, 4 operation executives)",
    achievements: "Enhanced CRM applications and improved business reporting efficiency through SQL optimization. Bridged technical and business domains effectively.",
    icon: Code
  }, {
    company: "Deshpande Foundation",
    location: "India",
    role: "Project Development Manager (Contract)",
    duration: "Jan 2022 – Dec 2022",
    teamSize: "Led 35 professionals (30 field executives, 1 technical assistant, 1 documentation officer, 1 accountant, 1 MIS specialist, 1 operations executive)",
    achievements: "Secured 20% funding increase and achieved 25% crop yield improvement through data-driven strategies. Managed large-scale agricultural development projects.",
    icon: TrendingUp
  }, {
    company: "Sid's Farm Pvt Ltd",
    location: "Hyderabad, India",
    role: "Data Analyst",
    duration: "May 2019 – Jul 2021",
    teamSize: "Cross-functional collaboration with production and delivery teams",
    achievements: "Reduced operational waste by 8% through Excel-based data models and delivery KPI tracking. Revolutionized dairy production planning through analytics.",
    icon: Database
  }, {
    company: "Krishi Vigyan Kendra (WWF-BCI Project)",
    location: "Telangana, India",
    role: "Project Manager & Team Lead",
    duration: "Jun 2018 – May 2019",
    teamSize: "Led 18 professionals (12 field facilitators, 4 developers, 1 computer operator, 1 lab assistant)",
    achievements: "Improved reporting efficiency by 8% through statistical methodologies and Excel analytics. Led grant-funded agricultural projects from inception to completion.",
    icon: Briefcase
  }];
  const skills = [{
    category: "Analytics & BI",
    items: ["SQL", "Power BI", "Tableau", "Excel Advanced"]
  }, {
    category: "Development",
    items: ["Java", "Salesforce", "CRM Systems", "Python"]
  }, {
    category: "Project Management",
    items: ["Agile", "SDLC", "Jira", "MS Visio", "Team Leadership"]
  }, {
    category: "Business & Strategy",
    items: ["Stakeholder Management", "Process Optimization", "Requirements Gathering", "Cross-functional Leadership"]
  }];
  const leadershipStats = [{
    metric: "58+",
    description: "Professionals Led Across Organizations",
    color: "bg-blue-50 text-blue-600"
  }, {
    metric: "6",
    description: "Organizations & Leadership Roles",
    color: "bg-green-50 text-green-600"
  }, {
    metric: "7+",
    description: "Years of Management Experience",
    color: "bg-purple-50 text-purple-600"
  }, {
    metric: "4",
    description: "Industries & Domains",
    color: "bg-orange-50 text-orange-600"
  }];
  return <div className="max-w-4xl mx-auto p-6 space-y-8 bg-white">
      {/* Header */}
      <div className="text-center space-y-4 pb-8 border-b border-gray-200">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-gray-900">Mourya Kancham</h1>
          <h2 className="text-xl text-primary font-medium">Business Analyst & Strategic Leadership Consultant</h2>
          <p className="text-gray-600">Team Leader | Cross-Domain Expert | Strategic Problem Solver</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Mail size={16} />
            <span>kancham.mourya@gmail.com</span>
          </div>
          <div className="flex items-center gap-1">
            <Linkedin size={16} />
            <span>linkedin.com/in/mourya-kancham-a0703226b/</span>
          </div>
          <div className="flex items-center gap-1">
            <Github size={16} />
            <span>github.com/Mourya-kancham</span>
          </div>
        </div>

        <div className="flex justify-center gap-4 pt-4">
          <Button onClick={onDownload} className="flex items-center gap-2">
            <Download size={18} />
            Download PDF
          </Button>
          <Button variant="outline" onClick={handlePrint} className="flex items-center gap-2">
            <Download size={18} />
            Print CV
          </Button>
        </div>
      </div>

      {/* Leadership Overview */}
      <section className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
          <Users className="text-primary" size={24} />
          Leadership & Management Overview
        </h3>
        <div className="grid md:grid-cols-4 gap-4">
          {leadershipStats.map((stat, index) => <div key={index} className={`text-center p-4 ${stat.color} rounded-lg`}>
              <div className="text-3xl font-bold">{stat.metric}</div>
              <div className="text-sm">{stat.description}</div>
            </div>)}
        </div>
      </section>

      {/* Professional Summary */}
      <section className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
          <Award className="text-primary" size={24} />
          Professional Summary
        </h3>
        <Card>
          <CardContent className="p-6">
            <p className="text-gray-700 leading-relaxed mb-4 text-justify">With over eight years as a Business Analyst and Team Leader, I bring a dynamic blend of analytical expertise, technical proficiency, and proven leadership capabilities to transform complex challenges into impactful solutions across agriculture, nonprofit, staffing, and technology sectors. Having led 58+ professionals across six organizations, I excel at managing cross-functional teams while delivering data-driven results using tools like SQL, Power BI, Salesforce, and Jira.</p>
            <p className="text-gray-700 leading-relaxed text-justify">
              My entrepreneurial foundation began in my teenage years with establishing a sericulture business, followed by early involvement in family business development projects. This background, combined with my empathetic leadership style and strategic thinking, enables me to drive measurable success through collaboration and innovative solutions. Passionate about global opportunities and continuous learning, I thrive on mastering new technologies while maintaining focus on meaningful business impact.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Experience */}
      <section className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
          <Briefcase className="text-primary" size={24} />
          Professional Experience & Leadership Roles
        </h3>
        <div className="space-y-4">
          {experiences.map((exp, index) => <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <exp.icon className="text-primary" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">{exp.role}</h4>
                        <p className="text-primary font-medium">{exp.company}, {exp.location}</p>
                      </div>
                      <span className="text-sm text-gray-500 font-medium">{exp.duration}</span>
                    </div>
                    <div className="mb-3">
                      <div className="flex items-center gap-2 text-sm text-accent font-medium">
                        <Users size={16} />
                        <span>{exp.teamSize}</span>
                      </div>
                    </div>
                    <p className="text-gray-700">{exp.achievements}</p>
                  </div>
                </div>
              </CardContent>
            </Card>)}
        </div>
      </section>

      {/* Early Background & Entrepreneurship */}
      <section className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
          <Star className="text-primary" size={24} />
          Early Background & Entrepreneurship
        </h3>
        <Card className="bg-gradient-to-r from-primary/5 to-accent/5">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Family Business Foundation</h4>
                <p className="text-gray-700 text-justify">
                  Early involvement in family business including father's school development projects, module development, campaign planning, and organizing science fair competitions. This experience built foundational skills in business development and revenue generation.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Teenage Entrepreneurship</h4>
                <p className="text-gray-700 text-justify">
                  Established and managed a sericulture business during teenage years, demonstrating early entrepreneurial spirit and hands-on business management capabilities.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Technical Skills */}
      <section className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
          <Code className="text-primary" size={24} />
          Technical Skills & Competencies
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {skills.map((skillGroup, index) => <Card key={index}>
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{skillGroup.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => <span key={skillIndex} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      {skill}
                    </span>)}
                </div>
              </CardContent>
            </Card>)}
        </div>
      </section>

      {/* Key Achievements */}
      <section className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
          <TrendingUp className="text-primary" size={24} />
          Key Achievements & Impact
        </h3>
        <Card>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-3xl font-bold text-green-600">25%</div>
                <div className="text-sm text-gray-600">Reporting Accuracy Improvement</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600">20%</div>
                <div className="text-sm text-gray-600">Funding Increase Secured</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-3xl font-bold text-purple-600">15%</div>
                <div className="text-sm text-gray-600">Candidate Matching Efficiency</div>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <div className="text-3xl font-bold text-orange-600">8%</div>
                <div className="text-sm text-gray-600">Operational Waste Reduction</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Leadership Philosophy & Global Aspirations */}
      <section className="space-y-4">
        <Card className="bg-gradient-to-r from-primary/5 to-accent/5">
          <CardContent className="p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Leadership Philosophy & Global Vision</h4>
            <p className="text-gray-700 leading-relaxed mb-4 text-justify">
              My leadership approach is rooted in empathy, strategic thinking, and collaborative problem-solving. Having managed diverse teams across multiple industries and cultural contexts, I excel at building bridges between technical and business domains while fostering innovation and measurable growth.
            </p>
            <p className="text-gray-700 leading-relaxed text-justify">
              With aspirations for global work opportunities, I bring adaptability, cross-cultural awareness, and a passion for learning that enables me to thrive in diverse environments. My technical toolkit spans SQL, Power BI, Tableau, Salesforce, and Java, complemented by proven leadership and SDLC expertise. Ready to bring my analytical mindset, innovative spirit, and management experience to drive success in your next global initiative.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>;
};
export default CVDisplay;