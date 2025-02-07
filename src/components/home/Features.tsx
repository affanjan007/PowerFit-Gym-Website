import React from 'react';
import { Users, Clock, Dumbbell } from 'lucide-react';

const features = [
  {
    icon: <Users className="h-6 w-6 text-red-500" />,
    title: 'Expert Trainers',
    description: 'Work with certified professionals who are passionate about your success',
  },
  {
    icon: <Clock className="h-6 w-6 text-red-500" />,
    title: '24/7 Access',
    description: 'Train on your schedule with round-the-clock facility access',
  },
  {
    icon: <Dumbbell className="h-6 w-6 text-red-500" />,
    title: 'Premium Equipment',
    description: 'State-of-the-art machines and free weights for optimal training',
  },
] as const;

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose PowerFit?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}