import React from 'react';
import Button from '../ui/Button';

export default function Promotion() {
  return (
    <section className="py-20 bg-red-500 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Special Offer</h2>
        <p className="text-xl mb-8">
          Join now and get 50% off your first month!<br />
          Limited time offer - Don't miss out!
        </p>
        <Button variant="secondary" size="lg" to="/membership">
          View Membership Plans
        </Button>
      </div>
    </section>
  );
}