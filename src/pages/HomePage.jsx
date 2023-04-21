import React from 'react';
import Header from '../components/header/Header';
import HeroSection from '../components/hero-section/HeroSection';
import Sidebar from '../components/side-bar/Sidebar';
import Blogs from '../components/blogs/Blogs';


function HomePage() {
   return (
    <div>
      <Header />
      <HeroSection />
      <main className='main'>
        <Sidebar />
        <Blogs/>
      </main>
    </div>
  );
  
}

export default HomePage;
