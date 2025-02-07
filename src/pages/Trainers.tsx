import React from 'react';
import { Award, Dumbbell, Heart } from 'lucide-react';
import Button from '@/components/ui/Button';
import { useNavigate } from 'react-router-dom';

const trainers = [
  {
    id: 1,
    name: 'Marcus Thompson',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&q=80&w=400',
    education: 'M.S. in Exercise Science, Stanford University',
    certifications: ['NASM Certified Personal Trainer', 'CrossFit Level 3 Trainer'],
    expertise: ['Strength Training', 'Olympic Weightlifting', 'Sports Performance'],
    description: 'With over a decade of experience in strength and conditioning, Marcus specializes in helping athletes achieve peak performance. His evidence-based approach combines traditional strength training with modern sports science.',
    gender: 'male',
  },
  {
    id: 2,
    name: 'Lisa Rodriguez',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=400',
    education: 'B.S. in Kinesiology, UCLA',
    certifications: ['ACE Certified Personal Trainer', 'Precision Nutrition Coach'],
    expertise: ['Weight Loss', 'Nutrition Planning', 'Strength Training'],
    description: 'Lisa\'s holistic approach to fitness focuses on sustainable lifestyle changes. He specializes in strength training and has helped hundreds of clients achieve their fitness goals.',
    gender: 'male',
  },
  {
    id: 3,
    name: 'Alexander Chen',
    image: 'https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?auto=format&fit=crop&q=80&w=400',
    education: 'B.A. in Sports Science, University of Michigan',
    certifications: ['ISSA Master Trainer', 'TRX Certified Instructor'],
    expertise: ['Functional Training', 'Core Conditioning', 'HIIT'],
    description: 'Alexander brings energy and expertise to every session. His functional training programs help clients build strength, mobility, and endurance while preventing injuries.',
    gender: 'male',
  },
  {
    id: 4,
    name: 'Samuel Patel',
    image: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?auto=format&fit=crop&q=80&w=400',
    education: 'M.A. in Physical Education, Columbia University',
    certifications: ['ACSM Certified Exercise Physiologist', 'Yoga Alliance RYT-200'],
    expertise: ['Yoga', 'Mobility Training', 'Senior Fitness'],
    description: 'Samuel combines traditional fitness techniques with yoga principles to create balanced, full-body workouts. He specializes in helping clients improve flexibility and prevent injuries.',
    gender: 'male',
  },
  {
    id: 5,
    name: 'Sarah Wilson',
    image: 'https://img.freepik.com/free-photo/girl-gym-with-jump-rope_1303-5518.jpg?t=st=1736939193~exp=1736942793~hmac=c3134d4f8522852a5f43563381d4a51d0326253fa3c2733e1f910a638fd14a9b&w=740',
    education: 'B.S. in Exercise Physiology, Penn State',
    certifications: ['NSCA Certified Strength and Conditioning Specialist', 'Kettlebell Certification'],
    expertise: ['Powerlifting', 'Athletic Performance', 'Group Training'],
    description: 'Sarah\'s background in competitive powerlifting and group training makes her an ideal coach for both strength athletes and fitness enthusiasts. Her programs focus on building real-world strength and confidence.',
    gender: 'female',
  },
  {
    id: 6,
    name: 'Isabella Martinez',
    image: 'https://img.freepik.com/free-photo/attractive-sports-girl-personal-trainer-middle-modern-gym-with-workout-plan-her-hands_496169-2795.jpg?ga=GA1.1.2099197220.1718887029&semt=ais_hybrid',
    education: 'B.S. in Health and Fitness, Arizona State University',
    certifications: ['NASM Performance Enhancement Specialist', 'Pilates Instructor Certification'],
    expertise: ['Pilates', 'Dance Fitness', 'Post-rehabilitation Training'],
    description: 'Isabella brings her background in dance and rehabilitation to create dynamic, low-impact workouts. She specializes in helping clients recover from injuries while building strength and flexibility.',
    gender: 'female',
  },
];

export default function Trainers() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4">Our Expert Trainers</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Work with our certified fitness professionals to achieve your goals. Each trainer brings unique expertise and a proven track record of success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <div
              key={trainer.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="aspect-w-3 aspect-h-4">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{trainer.name}</h2>

                <div className="mb-4">
                  <div className="flex items-center mb-2 hover-bounce">
                    <Award className="w-5 h-5 text-red-500 mr-2" />
                    <p className="text-sm font-medium">{trainer.education}</p>
                  </div>
                  <div className="flex items-start mb-2">
                    <Dumbbell className="w-5 h-5 text-red-500 mr-2 mt-1 hover-bounce" />
                    <div>
                      <p className="text-sm font-medium mb-1">Expertise:</p>
                      <ul className="text-sm text-gray-600">
                        {trainer.expertise.map((exp, index) => (
                          <li key={index}>{exp}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Heart className="w-5 h-5 text-red-500 mr-2 mt-1 hover-bounce" />
                    <div>
                      <p className="text-sm font-medium mb-1">Certifications:</p>
                      <ul className="text-sm text-gray-600">
                        {trainer.certifications.map((cert, index) => (
                          <li key={index}>{cert}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 text-sm">{trainer.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
