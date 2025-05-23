import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from './shared/Button';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-28 pb-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fadeIn">
              Master Coding with <span className="text-orange-400">Live Interactive</span> Classes
            </h1>
            <p className="text-xl mb-8 text-blue-100 max-w-lg">
              Join the premier online tech learning platform and transform your career with expert-led, interactive coding courses.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button href="#enroll" variant="accent" size="large">
                Enroll Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button href="#courses" variant="outline" size="large">
                Explore Courses
              </Button>
            </div>
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100`}
                    alt="Student"
                    className="w-10 h-10 rounded-full border-2 border-blue-800 object-cover"
                  />
                ))}
              </div>
              <div className="ml-4">
                <p className="text-blue-100">Joined by <span className="font-bold text-white">2,000+</span> students</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <img 
              src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Student learning to code" 
              className="rounded-lg shadow-2xl md:scale-110"
            />
            <div className="absolute top-4 right-4 bg-orange-500 text-white py-2 px-4 rounded-full text-sm font-medium">
              Live Classes
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;