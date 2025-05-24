import React, { useState } from 'react';
import { Calendar, Clock, CheckCircle } from 'lucide-react';
import Button from './shared/Button';

const schedules = [
  { day: 'Monday', time: '7:00 PM - 9:00 PM', batch: 'Batch A' },
  { day: 'Wednesday', time: '7:00 PM - 9:00 PM', batch: 'Batch A' },
  { day: 'Friday', time: '7:00 PM - 9:00 PM', batch: 'Batch A' },
  { day: 'Tuesday', time: '6:00 PM - 8:00 PM', batch: 'Batch B' },
  { day: 'Thursday', time: '6:00 PM - 8:00 PM', batch: 'Batch B' },
  { day: 'Saturday', time: '10:00 AM - 12:00 PM', batch: 'Batch B' }
];

const EnrollmentSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    batch: 'Batch A'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Form submitted successfully! We will contact you shortly.');
  };

  return (
    <section id="enroll" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Begin Your Coding Journey Today</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Register for our upcoming batch and take the first step towards a successful tech career
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-8">
              <h3 className="text-2xl font-bold mb-6">Enroll Now</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="batch" className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Batch
                  </label>
                  <select
                    id="batch"
                    name="batch"
                    value={formData.batch}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="Batch A">Batch A (Mon, Wed, Fri)</option>
                    <option value="Batch B">Batch B (Tue, Thu, Sat)</option>
                  </select>
                </div>
                
                <Button type="submit" variant="primary" fullWidth>
                  Submit Application
                </Button>
              </form>
              
              <div className="mt-6 text-center text-sm text-gray-600">
                <p>By enrolling, you agree to our Terms of Service and Privacy Policy</p>
              </div>
            </div>
            
            <div className="lg:w-1/2 bg-gray-50 p-8">
              <h3 className="text-2xl font-bold mb-6">Class Schedule</h3>
              
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                  <h4 className="font-medium">Upcoming Batches</h4>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm">
                  {schedules.map((schedule, index) => (
                    <div 
                      key={index}
                      className={`flex items-center justify-between p-4 ${
                        index !== schedules.length - 1 ? 'border-b border-gray-100' : ''
                      }`}
                    >
                      <div>
                        <div className="font-medium">{schedule.day}</div>
                        <div className="text-sm text-gray-600">{schedule.batch}</div>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="text-sm">{schedule.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <div className="flex items-center mb-4">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                  <h4 className="font-medium">Payment Options</h4>
                </div>
                
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="h-5 w-5 flex items-center justify-center mr-3">
                      <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <div>
                      <span className="font-medium">Pay as you go</span>
                      <p className="text-sm text-gray-600">₹100 per session, flexible payment</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 flex items-center justify-center mr-3">
                      <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <div>
                      <span className="font-medium">Monthly package</span>
                      <p className="text-sm text-gray-600">₹2,200 per month (12 sessions)</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 flex items-center justify-center mr-3">
                      <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <div>
                      <span className="font-medium">Complete program</span>
                      <p className="text-sm text-gray-600">₹15,000 for full 200-hour course (25% discount)</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnrollmentSection;