import React, {useState } from 'react';
import Header from '../components/header/Header';
import HeroSection from '../components/hero-section/HeroSection';
import Sidebar from '../components/side-bar/Sidebar';
import Blogs from '../components/blogs/Blogs';


function HomePage() {

  const [inputText, setInputText] = useState('');
  const [searchCategory, setSearchCatergory] = useState('');



   return (
    <div>
      <Header />
      <HeroSection />
      <main className='main'>
        <Sidebar onInput ={setInputText}  value={inputText} />
         <Blogs inputValue={inputText}  />
      </main>
    </div>
  );
  
}

export default HomePage;
