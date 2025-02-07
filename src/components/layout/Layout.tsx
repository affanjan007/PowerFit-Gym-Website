import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import ChatBot from '../ui/ChatBot';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-16">{children}</main>
      <Footer />
      <ChatBot />
    </div>
  );
}