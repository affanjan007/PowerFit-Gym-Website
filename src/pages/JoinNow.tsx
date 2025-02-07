import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '@/components/ui/Button';

interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  selectedClass: string;
}

const JoinNow = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState<string>(
    location.state?.plan || 'Premium'
  );
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    selectedClass: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const membershipPlans = [
    { name: 'Basic', price: 20 },
    { name: 'Premium', price: 50 },
    { name: 'Elite', price: 80 },
  ];

  const classes = ['Strength Training', 'HIIT', 'Spin'];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlanChange = (plan: string) => {
    setSelectedPlan(plan);
  };

  const handleClassChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, selectedClass: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulated API call

      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        selectedClass: '',
      });

      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <section className="py-20 bg-gray-50 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 animate-fade-in">Join Now</h1>
          <p className="text-gray-600 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
            Ready to get started? Choose your membership plan, select a class, and fill out the form below to sign up.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
          {membershipPlans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300 ${
                selectedPlan === plan.name ? 'ring-2 ring-red-500' : ''
              } animate-fade-in`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-gray-600">/month</span>
              </div>
              <Button
                variant={selectedPlan === plan.name ? 'primary' : 'outline'}
                className="w-full"
                onClick={() => handlePlanChange(plan.name)}
              >
                {selectedPlan === plan.name ? 'Selected' : `Choose ${plan.name}`}
              </Button>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg animate-fade-in" style={{ animationDelay: '600ms' }}>
          {isSubmitted ? (
            <div className="text-center py-8">
              <h2 className="text-2xl font-bold text-green-600 mb-4">Thank You for Joining!</h2>
              <p className="text-gray-600">
                Your membership application has been submitted successfully. We'll contact you shortly with next steps.
              </p>
            </div>
          ) : (
            <>
              <h2 className="text-3xl font-bold mb-4 text-center">Complete Your Registration</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                      Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="selectedClass" className="block text-sm font-medium text-gray-700">
                    Select Your Class
                  </label>
                  <select
                    id="selectedClass"
                    name="selectedClass"
                    value={formData.selectedClass}
                    onChange={handleClassChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    required
                  >
                    <option value="">Choose a class</option>
                    {classes.map((classOption, index) => (
                      <option key={index} value={classOption}>
                        {classOption}
                      </option>
                    ))}
                  </select>
                </div>

                <Button variant="primary" className="w-full" type="submit">
                  Complete Registration
                </Button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default JoinNow;
