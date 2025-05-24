import React from 'react';
import { Calendar, Clock, Star, Users, BookOpen, Code, BrainCircuit, PanelRight } from 'lucide-react';
import Button from './shared/Button';

const CourseSection: React.FC = () => {
  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Flagship Program</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Learn the most in-demand skills and prepare for a rewarding career in technology
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 relative">
              <img 
                src="https://images.pexels.com/photos/7516263/pexels-photo-7516263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Software Engineering Course" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-900 bg-opacity-60 flex flex-col justify-end p-8">
                <div className="bg-white text-blue-900 inline-block px-4 py-2 rounded-lg font-semibold mb-4">
                  Most Popular
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">
                  Complete Software Engineering with Python & Gen AI
                </h3>
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="bg-blue-800 bg-opacity-70 text-white text-sm px-3 py-1 rounded-full">
                    Python Programming
                  </span>
                  <span className="bg-blue-800 bg-opacity-70 text-white text-sm px-3 py-1 rounded-full">
                    Generative AI
                  </span>
                  <span className="bg-blue-800 bg-opacity-70 text-white text-sm px-3 py-1 rounded-full">
                    Full-Stack Development
                  </span>
                  <span className="bg-blue-800 bg-opacity-70 text-white text-sm px-3 py-1 rounded-full">
                    Data Science
                  </span>
                  <span className="bg-blue-800 bg-opacity-70 text-white text-sm px-3 py-1 rounded-full">
                    Machine Learning
                  </span>
                </div>
                <div className="flex flex-wrap gap-4 text-white">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>200 Hours</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>100 Live Sessions</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-2" />
                    <span>4.9/5 Rating</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    <span>21 Comprehensive Modules</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 p-8">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-bold">Course Highlights</h4>
                  <div className="flex items-center text-orange-500 font-semibold">
                    <span className="text-3xl mr-1">₹100</span> per session
                  </div>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Code className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                    <div>
                      <span className="font-medium">Complete Python Mastery</span>
                      <p className="text-sm text-gray-600">From basics to advanced programming, including OOP, algorithms, and best practices</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <BrainCircuit className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                    <div>
                      <span className="font-medium">Generative AI & Machine Learning</span>
                      <p className="text-sm text-gray-600">Build AI-powered applications, work with LLMs, and implement ML solutions</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <PanelRight className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                    <div>
                      <span className="font-medium">Full-Stack Web Development</span>
                      <p className="text-sm text-gray-600">Master Django, Flask, FastAPI, and modern web technologies</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <BookOpen className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                    <div>
                      <span className="font-medium">Data Science & Analytics</span>
                      <p className="text-sm text-gray-600">Work with NumPy, Pandas, and visualization tools for data-driven insights</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Code className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                    <div>
                      <span className="font-medium">Real-World Projects</span>
                      <p className="text-sm text-gray-600">Build portfolio-worthy applications including AI-powered solutions</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="border-t pt-6">
                <h4 className="text-xl font-bold mb-4">Learning Outcomes</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  <li className="flex items-center text-sm">
                    <div className="h-2 w-2 rounded-full bg-blue-600 mr-2"></div>
                    Build full-stack web applications
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="h-2 w-2 rounded-full bg-blue-600 mr-2"></div>
                    Develop AI-powered solutions
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="h-2 w-2 rounded-full bg-blue-600 mr-2"></div>
                    Master Python programming
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="h-2 w-2 rounded-full bg-blue-600 mr-2"></div>
                    Analyze data with ML
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="h-2 w-2 rounded-full bg-blue-600 mr-2"></div>
                    Create desktop applications
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="h-2 w-2 rounded-full bg-blue-600 mr-2"></div>
                    Deploy to production
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="h-2 w-2 rounded-full bg-blue-600 mr-2"></div>
                    Pass technical interviews
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="h-2 w-2 rounded-full bg-blue-600 mr-2"></div>
                    Work with databases
                  </li>
                </ul>
                <Button href="#enroll" variant="primary" fullWidth>
                  Enroll in This Course
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseSection;