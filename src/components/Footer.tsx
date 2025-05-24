import React from 'react';
import { Code, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/codeclass-logo.png" 
                alt="Code Class Logo" 
                className="h-8 w-auto"
              />
              <span className="text-2xl font-bold">Code Class</span>
            </div>
            <p className="text-blue-200 mb-6">
              Transforming careers through interactive online tech education. Join thousands of successful students on their journey to tech excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-800 p-2 rounded-full hover:bg-blue-700 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-blue-800 p-2 rounded-full hover:bg-blue-700 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-blue-800 p-2 rounded-full hover:bg-blue-700 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-blue-800 p-2 rounded-full hover:bg-blue-700 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#courses" className="text-blue-200 hover:text-white transition-colors">Courses</a>
              </li>
              <li>
                <a href="#syllabus" className="text-blue-200 hover:text-white transition-colors">Syllabus</a>
              </li>
              <li>
                <a href="#benefits" className="text-blue-200 hover:text-white transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#testimonials" className="text-blue-200 hover:text-white transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#faq" className="text-blue-200 hover:text-white transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors">Blog</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 mt-1 text-blue-300" />
                <div>
                  <a href="mailto:info@codeclass.com" className="text-blue-200 hover:text-white transition-colors">
                    info@codeclass.com
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 mt-1 text-blue-300" />
                <div>
                  <a href="tel:+91-9876543210" className="text-blue-200 hover:text-white transition-colors">
                    +91-9876543210
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1 text-blue-300" />
                <div className="text-blue-200">
                  Cyber Hub, DLF Cyber City,<br />
                  Gurugram, Haryana 122002
                </div>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Subscribe</h3>
            <p className="text-blue-200 mb-4">
              Stay updated with our latest courses and tech news
            </p>
            <form className="mb-4">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-blue-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                />
                <button 
                  type="submit" 
                  className="bg-brand-primary hover:bg-brand-secondary px-4 py-2 rounded-r-lg font-medium transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <p className="text-blue-300 text-sm">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
        
        <div className="border-t border-blue-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-300 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Code Class. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-blue-300 text-sm hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-blue-300 text-sm hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-blue-300 text-sm hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;