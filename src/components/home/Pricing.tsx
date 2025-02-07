import React from 'react';
import Button from '@/components/ui/Button';

const plans = [
  {
    name: 'Basic',
    price: 20,
    features: [
      'Full gym access',
      'Locker room access',
      'Basic fitness assessment',
      '2 Guest passes/month',
    ],
  },
  {
    name: 'Premium',
    price: 50,
    features: [
      'Everything in Basic',
      'Unlimited classes',
      'Personal trainer session',
      'Nutrition consultation',
      'Towel service',
    ],
    popular: true,
  },
  {
    name: 'Elite',
    price: 80,
    features: [
      'Everything in Premium',
      'Weekly PT sessions',
      'Monthly massage',
      'Spa access',
      'Priority booking',
    ],
  },
];

export default function Pricing() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">
          Simple, Transparent Pricing
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-lg overflow-hidden card-hover transform-3d ${
                plan.popular ? 'ring-2 ring-red-500' : ''
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant={plan.popular ? 'primary' : 'outline'}
                  className="w-full hover-bounce"
                  to="/membership"
                >
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}