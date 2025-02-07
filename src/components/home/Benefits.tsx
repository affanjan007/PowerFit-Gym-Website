import React from 'react';
import { Users, Clock, Trophy, Shield } from 'lucide-react';

const benefits = [
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Expert Trainers',
    description: 'Certified professionals dedicated to your success'
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: '24/7 Access',
    description: 'Work out on your schedule, any time of day'
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    title: 'Modern Equipment',
    description: 'State-of-the-art machines and free weights'
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Clean & Safe',
    description: 'Regular sanitization and safety protocols'
  }
];

export default function Benefits() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="text-center card-hover transform-3d"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-100 text-red-600 mb-4 hover-bounce">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}