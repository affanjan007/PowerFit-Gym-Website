import React from 'react';
import { Check, X, HelpCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/ui/Button';

const membershipPlans = [
  {
    name: 'Basic',
    price: 20,
    commitment: 'Monthly, no contract',
    features: [
      { name: 'Full gym access', included: true },
      { name: 'Locker room access', included: true },
      { name: 'Basic fitness assessment', included: true },
      { name: '2 Guest passes/month', included: true },
      { name: 'Group classes', included: false },
      { name: 'Personal trainer', included: false },
      { name: 'Nutrition consultation', included: false },
    ],
  },
  {
    name: 'Premium',
    price: 50,
    commitment: 'Monthly, no contract',
    popular: true,
    features: [
      { name: 'Full gym access', included: true },
      { name: 'Locker room access', included: true },
      { name: 'Basic fitness assessment', included: true },
      { name: '4 Guest passes/month', included: true },
      { name: 'Unlimited group classes', included: true },
      { name: '1 Personal training session/month', included: true },
      { name: 'Nutrition consultation', included: true },
    ],
  },
  {
    name: 'Elite',
    price: 80,
    commitment: 'Monthly, no contract',
    features: [
      { name: 'Full gym access', included: true },
      { name: 'Locker room access', included: true },
      { name: 'Advanced fitness assessment', included: true },
      { name: 'Unlimited guest passes', included: true },
      { name: 'Unlimited group classes', included: true },
      { name: '4 Personal training sessions/month', included: true },
      { name: 'Monthly nutrition consultation', included: true },
    ],
  },
];

export default function Membership() {
  const [selectedPlan, setSelectedPlan] = React.useState<string>('Premium');
  const navigate = useNavigate();

  const handlePlanSelection = (planName: string) => {
    setSelectedPlan(planName);
    navigate('/join-now', { state: { plan: planName } });
  };

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4">Membership Plans</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the perfect membership plan that fits your fitness goals and lifestyle.
            All plans include access to our state-of-the-art facilities and expert support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {membershipPlans.map((plan, index) => (
            <div
              key={plan.name}
              className={`bg-white rounded-lg shadow-lg overflow-hidden card-hover transform-3d animate-fade-in ${
                plan.popular ? 'ring-2 ring-red-500' : ''
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold mb-2">${plan.price}/mo</div>
                  <p className="text-sm text-gray-500 mb-4">{plan.commitment}</p>
                  <Button
                    variant={plan.popular ? 'primary' : 'outline'}
                    className="w-full hover-bounce"
                    onClick={() => handlePlanSelection(plan.name)}
                  >
                    Choose {plan.name}
                  </Button>
                </div>

                <div className="space-y-4">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-green-500 mr-3" />
                      ) : (
                        <X className="w-5 h-5 text-red-500 mr-3" />
                      )}
                      <span className={feature.included ? 'text-gray-800' : 'text-gray-400'}>
                        {feature.name}
                      </span>
                      {feature.info && (
                        <HelpCircle className="w-4 h-4 text-gray-400 ml-2" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}