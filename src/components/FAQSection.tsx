import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'What prerequisites do I need for the Python and Gen AI course?',
    answer: 'No prior programming experience is required for our comprehensive 21-module program. We start from the absolute basics and gradually progress to advanced concepts including AI and machine learning. However, basic computer literacy and a strong willingness to learn are essential.'
  },
  {
    question: 'How long does the complete program take?',
    answer: 'The complete program consists of 200 hours of instruction delivered over 100 live sessions. With our standard schedule of 3 sessions per week, the program typically takes about 8-10 months to complete, allowing for breaks and project work.'
  },
  {
    question: 'How are the live classes conducted?',
    answer: 'Classes are conducted via Zoom with interactive features enabled. You\'ll see the instructor\'s screen, can ask questions via chat or voice, and participate in coding exercises in real-time. All sessions are recorded and made available to enrolled students for review.'
  },
  {
    question: 'What if I miss a class?',
    answer: 'All live sessions are recorded and made available in your student portal within 24 hours. You can watch them at your convenience. However, we recommend attending live sessions whenever possible for the best learning experience and to get your questions answered in real-time.'
  },
  {
    question: 'Do you provide job placement assistance?',
    answer: 'Yes, we offer comprehensive career support including resume reviews, interview preparation, and connections with our hiring partners. Our placement team works with you to highlight your new skills and projects. While we don\'t guarantee job placement, our students have a 94% success rate in finding relevant positions within 3 months of course completion.'
  },
  {
    question: 'Can I switch batches if my schedule changes?',
    answer: 'Yes, you can switch between Batch A and Batch B with prior notice of at least 48 hours, subject to availability. Please contact our student support team to arrange any schedule changes.'
  },
  {
    question: 'What kind of projects will I build during the course?',
    answer: 'You\'ll work on numerous hands-on projects throughout the 21 modules, including web applications with Django/Flask, AI-powered tools, data analysis projects, desktop applications, and two major capstone projects. All projects are designed to be portfolio-worthy and demonstrate real-world skills to potential employers.'
  }
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about our courses and learning process
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="mb-4 bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300"
            >
              <button 
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() => toggleFaq(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-lg font-medium">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-brand-secondary" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-brand-secondary" />
                )}
              </button>
              
              <div 
                id={`faq-answer-${index}`}
                className={`px-6 pb-6 text-gray-600 ${openIndex === index ? 'block' : 'hidden'}`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <div className="inline-flex items-center justify-center bg-brand-primary bg-opacity-10 px-6 py-3 rounded-full text-brand-text font-medium">
            Email us at <a href="mailto:support@codeclass.com" className="ml-1 underline">support@codeclass.com</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;