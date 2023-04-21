import React from 'react';
import classes from './HeroSection.module.scss';


function HeroSection() {
  return (
    <div className={classes['section-hero']}>
      <div className={classes['section-text-box']}>

      <h1>transforming agriculture with technology</h1>
      <p className={classes['section-hero-text']}>Revolutionizing Agriculture through Innovation: Explore the Latest Trends and Technologies in Agri-Tech with Ouranos Robotics' Leading Blog</p>
      </div>
    </div>
  );
}

export default HeroSection;
