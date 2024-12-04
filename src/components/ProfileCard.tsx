import React from 'react';
import { SocialLinks } from './SocialLinks';
import ahmadImage from '@/assets/images/ahmad.jpeg';

export function ProfileCard() {
  return (
    <main className="bg-gray-900 p-8 rounded-2xl shadow-xl max-w-2xl w-full mx-auto text-center">
      <section className="profile">
        <header className="relative mb-6">
          <img
            src={ahmadImage}
            alt="Ahmad Nidal"
            className="w-32 h-32 rounded-full mx-auto border-4 border-gray-700"
          />
        </header>

        <h1 className="text-3xl font-bold text-white mb-2">أحمد نضال</h1>

        <p className="text-gray-400 text-lg mb-4 leading-relaxed">
          مهندس برمجيات | Software Eng | Back End Developer
          <br />
          ASP.Net Core | ABP Framework
        </p>
      </section>
      
      <SocialLinks />
    </main>
  );
}