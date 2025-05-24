import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Software Developer at Amazon',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    quote: 'The Python and Gen AI course completely transformed my career. The live classes and real-time feedback made complex concepts easy to understand. I went from a non-technical role to a software developer position at Amazon in just 6 months!',
    rating: 5
  },
  {
    id: 2,
    name: 'Rahul Mehta',
    role: 'Data Scientist at Flipkart',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    quote: 'What sets Code Class apart is the quality of instruction and the interactive learning environment. I tried several online platforms before, but nothing compares to having a live instructor who can answer your questions immediately.',
    rating: 5
  },
  {
    id: 3,
    name: 'Ananya Patel',
    role: 'Frontend Developer at MakeMyTrip',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    quote: 'The affordability of Code Class made quality tech education accessible to me. At just ₹100 per session, I was able to learn web development from industry experts without breaking the bank. Now I\'m working as a frontend developer!',
    rating: 4
  },
  {
    id: 4,
    name: 'Vikram Singh',
    role: 'Machine Learning Engineer at Ola',
    image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    quote: 'The AI and ML modules were exactly what I needed to transition into the field. The hands-on projects and personalized guidance from instructors gave me the confidence to apply for roles I previously thought were out of reach.',
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Students Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from the students who have transformed their careers with Code Class
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial navigation buttons */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white rounded-full p-3 shadow-md z-10 hover:bg-gray-50 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-brand-secondary" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white rounded-full p-3 shadow-md z-10 hover:bg-gray-50 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-brand-secondary" />
          </button>

          {/* Testimonial carousel */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="min-w-full bg-white rounded-xl shadow-md p-8 md:p-12"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 mb-6 md:mb-0">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover mx-auto"
                      />
                    </div>
                    <div className="md:w-2/3">
                      <div className="flex mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i}
                            className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                      <blockquote className="text-lg italic mb-6">
                        "{testimonial.quote}"
                      </blockquote>
                      <div>
                        <div className="font-bold text-lg">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicator dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 w-3 rounded-full transition-colors ${
                  currentIndex === index ? 'bg-brand-secondary' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;