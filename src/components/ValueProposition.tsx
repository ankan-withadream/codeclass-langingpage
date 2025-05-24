import React from 'react';
import { Monitor, Users, DollarSign, GraduationCap, MessageSquare } from 'lucide-react';

const features = [
  {
    icon: <Monitor className="h-10 w-10 text-brand-secondary" />,
    title: 'Live Online Classes',
    description: 'Interactive sessions with real-time instruction and feedback, not pre-recorded videos.'
  },
  {
    icon: <Users className="h-10 w-10 text-brand-secondary" />,
    title: 'Small Class Size',
    description: 'Limited to 25 students per batch to ensure personalized attention and guidance.'
  },
  {
    icon: <DollarSign className="h-10 w-10 text-brand-secondary" />,
    title: 'Affordable Pricing',
    description: 'Premium education at just ₹100 per session, making quality tech education accessible.'
  },
  {
    icon: <GraduationCap className="h-10 w-10 text-brand-secondary" />,
    title: 'Expert Instructors',
    description: 'Learn from industry professionals with real-world experience in tech companies.'
  },
  {
    icon: <MessageSquare className="h-10 w-10 text-brand-secondary" />,
    title: 'Interactive Learning',
    description: 'Participate in discussions, ask questions, and collaborate with peers in real-time.'
  }
];

const ValueProposition: React.FC = () => {
  return (
    <section id="benefits" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Code Class?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our unique approach to online tech education offers advantages you won't find elsewhere
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <div className="bg-brand-primary bg-opacity-10 inline-flex p-3 rounded-lg mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-brand-background to-brand-secondary rounded-xl p-8 md:p-12 text-white">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Industry-Relevant Curriculum</h3>
              <p className="mb-4 text-purple-100">
                Our comprehensive 21-module program is designed based on current industry needs and trends, focusing on practical skills that employers look for in tech professionals.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                <div className="bg-white bg-opacity-10 p-3 rounded-lg text-center">
                  <div className="font-bold text-2xl">94%</div>
                  <div className="text-sm">Job Placement</div>
                </div>
                <div className="bg-white bg-opacity-10 p-3 rounded-lg text-center">
                  <div className="font-bold text-2xl">21</div>
                  <div className="text-sm">Comprehensive Modules</div>
                </div>
                <div className="bg-white bg-opacity-10 p-3 rounded-lg text-center">
                  <div className="font-bold text-2xl">50+</div>
                  <div className="text-sm">Hiring Partners</div>
                </div>
              </div>
            </div>
            <div className="md:w-1/3">
              <img 
                src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Student success" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;