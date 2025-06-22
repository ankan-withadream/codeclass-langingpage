import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from './shared/Button';

const HeroSection: React.FC = () => {
  const newsHeadlines = [
    {
      headline: "OpenAI's GPT-5 Set to Revolutionize Enterprise AI Applications",
      source: "TechCrunch"
    },
    {
      headline: "Microsoft Invests $10B in AI Infrastructure to Compete with Google",
      source: "Reuters"
    },
    {
      headline: "AI Job Market Grows 74% as Companies Rush to Adopt Machine Learning",
      source: "Forbes"
    },
    {
      headline: "New Study Shows AI Will Create 97 Million Jobs by 2025",
      source: "World Economic Forum"
    },
    {
      headline: "Amazon's AI Assistant Now Handles 85% of Customer Service Inquiries",
      source: "Bloomberg"
    }
  ];

  return (
    <section className="pt-36 pb-24 bg-gradient-to-r from-primary-900 to-primary-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-8 animate-fadeInUp">
            <p>
              You might ignore <span className="text-brand-primary">AI</span>
            </p>
            <p>
              but <span className="text-brand-primary">AI</span> <span className="text-3xl md:text-4xl lg:text-7xl text-red-500">won't ignore you</span>
            </p>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-blue-100 max-w-3xl mx-auto italic">
            AI isn't here to take your job, but someone who knows AI definitely will.
          </p>

          {/* AI News Headlines Carousel */}
          <div className="mb-8 overflow-hidden bg-black/20 rounded-lg p-4">
            <div className="relative h-auto min-h-[80px] md:min-h-[60px] overflow-hidden">
              <div className="animate-slide-left">
                {newsHeadlines.map((news, index) => (
                  <div
                    key={index}
                    className="absolute w-full min-h-[80px] md:min-h-[60px] flex flex-col px-2 py-2"
                    style={{
                      animationDelay: `${index * 4}s`,
                      animationDuration: '20s'
                    }}
                  >
                    <p className="text-sm text-white font-medium text-left leading-relaxed mb-1">
                      {news.headline}
                    </p>
                    <div className="flex justify-end">
                      <span className="text-xs text-blue-300">
                        - {news.source}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="text-xl md:text-2xl mb-8 mt-16 md:mt-8 font-bold text-violet-200 max-w-2xl mx-auto">
            Don't get left behind...
          </p>
          <div className="space-y-6">
            {/* Mobile buttons - full width */}
            <div className="w-full sm:hidden space-y-4">
              <Button href="#enroll" variant="accent" size="large" fullWidth>
                Enroll Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button href="#courses" variant="outline" size="large" fullWidth>
                Explore Courses
              </Button>
            </div>
            
            {/* Desktop buttons - auto width */}
            <div className="hidden sm:flex sm:space-x-6 sm:justify-center">
              <Button href="#enroll" variant="accent" size="large">
                Enroll Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button href="#courses" variant="outline" size="large">
                Explore Courses
              </Button>
            </div>
          </div>
          
          <div className="mt-16 flex items-center justify-center">
            <div className="text-center">
              <p className="text-white text-md">2,000+ students already enrolled</p>
              <p className="text-sm text-blue-200">Join a thriving community of learners.</p>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
        @keyframes slideNews {
          0%, 18% { 
            transform: translateX(0); 
            opacity: 1; 
          }
          20%, 98% { 
            transform: translateX(-100%); 
            opacity: 0; 
          }
          100% { 
            transform: translateX(0); 
            opacity: 0; 
          }
        }
        .animate-slide-left {
          position: relative;
          min-height: 80px;
        }
        @media (min-width: 768px) {
          .animate-slide-left {
            min-height: 60px;
          }
        }
        .animate-slide-left > div {
          position: absolute;
          width: 100%;
          top: 0;
          left: 0;
          opacity: 0;
          transform: translateX(100%);
          animation: slideNews 20s infinite;
        }
        .animate-slide-left > div:nth-child(1) { animation-delay: 0s; }
        .animate-slide-left > div:nth-child(2) { animation-delay: 4s; }
        .animate-slide-left > div:nth-child(3) { animation-delay: 8s; }
        .animate-slide-left > div:nth-child(4) { animation-delay: 12s; }
        .animate-slide-left > div:nth-child(5) { animation-delay: 16s; }
        `}
      </style>
    </section>
  );
};

export default HeroSection;