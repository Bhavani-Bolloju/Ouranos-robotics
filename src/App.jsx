import React from 'react';
import Header from './components/header/Header';
import HeroSection from './components/hero-section/HeroSection';
import Sidebar from './components/side-bar/Sidebar';
import Blogs from './components/blogs/Blogs';


function App() {
  return (
    <div>
      <Header />
      <main>
        <HeroSection />
        <Sidebar />
        <Blogs/>
      </main>
    </div>
  );
}

export default App;
