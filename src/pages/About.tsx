import React from 'react';
import { Award, Heart, Dumbbell } from 'lucide-react';

const gymInfo = {
  name: 'PowerFit Gym',
  image: 'https://images.unsplash.com/photo-1623874514711-0f321325f318?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  mission: 'Our mission is to inspire and empower individuals to lead healthier, more active lives by providing a welcoming, supportive fitness environment.',
  values: ['Community', 'Health & Wellness', 'Innovation', 'Support'],
  services: ['Personal Training', 'Group Classes', 'Nutritional Coaching', 'HIIT', 'Strength Training'],
  description: 'PowerFit Gym offers state-of-the-art fitness equipment, expert trainers, and a wide range of fitness programs to meet the needs of people at all fitness levels. Whether you\'re looking to build strength, improve endurance, or simply live a healthier lifestyle, we\'re here to support your journey.',
};

export default function About() {
  return (
    <div className="py-20 bg-gradient-to-b from-gray-50 to-white animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 animate-fade-in">{gymInfo.name}</h1>
          <p className="text-gray-600 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
            {gymInfo.mission}
          </p>
        </div>

        <div className="flex justify-center">
          <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg overflow-hidden animate-fade-in" style={{ animationDelay: '400ms' }}>
            <img
              src={gymInfo.image}
              alt="Gym Image"
              className="w-full h-64 object-cover"
            />
            <div className="p-8">
              <h2 className="text-2xl font-semibold mb-4 text-center animate-fade-in" style={{ animationDelay: '600ms' }}>About Us</h2>
              <p className="text-gray-600 mb-8 text-center animate-fade-in" style={{ animationDelay: '800ms' }}>{gymInfo.description}</p>
              
              <div className="space-y-8">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-3 hover-bounce">
                    <Award className="w-6 h-6 text-red-500 mr-2" />
                    <p className="text-lg font-medium">Our Mission</p>
                  </div>
                  <p className="text-gray-600">{gymInfo.mission}</p>
                </div>

                <div className="text-center">
                  <div className="flex items-center justify-center mb-3 hover-bounce">
                    <Heart className="w-6 h-6 text-red-500 mr-2" />
                    <p className="text-lg font-medium">Our Core Values</p>
                  </div>
                  <ul className="text-gray-600">
                    {gymInfo.values.map((value, index) => (
                      <li key={index} className="mb-1">{value}</li>
                    ))}
                  </ul>
                </div>

                <div className="text-center">
                  <div className="flex items-center justify-center mb-3 hover-bounce">
                    <Dumbbell className="w-6 h-6 text-red-500 mr-2" />
                    <p className="text-lg font-medium">Our Services</p>
                  </div>
                  <ul className="text-gray-600">
                    {gymInfo.services.map((service, index) => (
                      <li key={index} className="mb-1">{service}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
