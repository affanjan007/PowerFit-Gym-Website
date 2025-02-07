import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-8">Visit Us</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-red-500 mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-gray-600">
                    123 Fitness Street<br />
                    New York, NY 10001
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-red-500 mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-gray-600">(555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-red-500 mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-gray-600">info@powerfit.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-8">Hours</h2>
            <div className="flex items-start">
              <Clock className="w-6 h-6 text-red-500 mt-1 mr-4" />
              <div className="space-y-2">
                <div>
                  <h3 className="font-semibold">Weekdays</h3>
                  <p className="text-gray-600">5:00 AM - 12:00 AM</p>
                </div>
                <div>
                  <h3 className="font-semibold">Saturday</h3>
                  <p className="text-gray-600">5:00 AM - 10:00 PM</p>
                </div>
                <div>
                  <h3 className="font-semibold">Sunday</h3>
                  <p className="text-gray-600">5:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}