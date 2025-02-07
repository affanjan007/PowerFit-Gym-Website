export interface Trainer {
  id: string;
  name: string;
  specialty: string;
  bio: string;
  image: string;
}

export interface Class {
  id: string;
  name: string;
  description: string;
  trainer: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  schedule: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  image: string;
  text: string;
  rating: number;
}

export interface MembershipPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  features: string[];
  isPopular?: boolean;
}