import React from 'react';
import { Dumbbell, Activity, Heart, Bike } from 'lucide-react';
import Button from '@/components/ui/Button';

const classes = [
  {
    name: 'Strength Training',
    icon: <Dumbbell className="w-10 h-10 text-red-500" />,
    description: 'Build muscle and improve strength with expert-guided weightlifting techniques.',
    schedule: ['Mon, Wed, Fri: 6:00 AM - 7:00 AM', 'Tue, Thu: 5:00 PM - 6:00 PM'],
    trainer: 'Marcus Thompson / Lisa Rodriguez / Alexander Chen ',
    level: 'All Levels',
  },
  {
    name: 'HIIT',
    icon: <Activity className="w-10 h-10 text-red-500" />,
    description: 'High-intensity interval training to boost metabolism and improve endurance.',
    schedule: ['Mon, Wed, Fri: 7:00 AM - 8:00 AM', 'Tue, Thu: 6:00 PM - 7:00 PM'],
    trainer: 'Sarah Wilson / Samuel Patel',
    level: 'Intermediate',
  },
  {
    name: 'Spin Class',
    icon: <Bike className="w-10 h-10 text-red-500" />,
    description: 'High-energy indoor cycling workouts set to motivating music.',
    schedule: ['Tue, Thu: 8:00 AM - 9:00 AM', 'Mon, Wed: 6:00 PM - 7:00 PM'],
    trainer: 'Isabella Martinez',
    level: 'All Levels',
  },
];

export default function Classes() {
  return (
    <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4">Our Classes</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join our diverse range of fitness classes led by expert trainers. 
            Whether you're a beginner or an advanced athlete, we have classes 
            to help you achieve your fitness goals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {classes.map((classItem, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden card-hover transform-3d animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="hover-bounce">
                    {classItem.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-center mb-2">
                  {classItem.name}
                </h3>
                <p className="text-gray-600 mb-4 text-center">
                  {classItem.description}
                </p>
                <div className="space-y-2 mb-6">
                  <p className="text-sm font-medium text-gray-800">
                    Trainer: {classItem.trainer}
                  </p>
                  <p className="text-sm font-medium text-gray-800">
                    Level: {classItem.level}
                  </p>
                  <div className="text-sm text-gray-600">
                    <p className="font-medium mb-1">Schedule:</p>
                    {classItem.schedule.map((time, idx) => (
                      <p key={idx} className="ml-2">{time}</p>
                    ))}
                  </div>
                </div>
                <Button variant="primary" to="/join-now" state={{ className: classItem.name }}>
                  Join Class
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}