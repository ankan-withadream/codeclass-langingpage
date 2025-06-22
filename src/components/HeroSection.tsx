import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from './shared/Button';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-36 pb-24 bg-gradient-to-r from-primary-900 to-primary-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* <div className="inline-block bg-brand-primary-500/20 text-brand-primary py-2 px-4 rounded-full text-sm font-medium mb-6">
            200+ Hours of Live Interactive Classes
          </div> */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6 animate-fadeInUp">
          {/* <p>
              Master <span className="text-brand-primary">AI & Tech</span>
            </p>
            <p>
              Shape your <span className="text-green-600">Future</span>
            </p> */}

           <p>
              You might ignore <span className="text-brand-primary">AI</span>
            </p>
            <p>
              but <span className="text-brand-primary">AI</span> <span className="text-3xl md:text-4xl lg:text-7xl text-red-500">won't ignore you</span>
            </p>
          </h1>
            <p className="text-xl md:text-2xl lg:text-3xl mb-10 text-blue-100 max-w-3xl mx-auto italic">
            AI isn't here to take your job, but someone who knows AI definitely will.
            </p>
          <p className="text-lg md:text-xl mb-10 text-blue-200 max-w-2xl mx-auto">
            <p>Don't get left behind.</p>
            {/* <p>Start getting ahead...</p> */}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button href="#enroll" variant="accent" size="large">
              Enroll Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button href="#courses" variant="outline" size="large">
              Explore Courses
            </Button>
          </div>
          <div className="mt-12 flex items-center justify-center">
            <div className="ml-5 text-left">
              <p className="font-bold text-white text-lg">2,000+ Students Enrolled</p>
              <p className="text-sm text-blue-200">Join a thriving community of learners.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;