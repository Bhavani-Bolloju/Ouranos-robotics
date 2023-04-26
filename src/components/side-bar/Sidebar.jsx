import React from 'react';
import classes from './Sidebar.module.scss';

import TopPostItem from '../UI/TopPostItem';
import { InputSearch } from '../UI/UIComponents';

function Sidebar({ onInput, value}) {
  return (
    <div className={classes['sidebar']}>
      <div className={classes['sidebar-container']}>
        <InputSearch onSearch={onInput} value={ value} />
        <div className={classes['category']}>
          <h3 className={classes['category-heading']}>categories</h3>
          <ul className={classes['category-list']}>
            <li>automation</li>
            <li>IoT</li>
            <li>precision agriculture</li>
            <li>sustainable farming</li>
            <li>industry news</li>
            <li>case studies</li>
            <li>tips & tricks</li>
          </ul>
        </div>
        <div className={classes['top-posts']}>
          <h3 className={classes['category-heading']}>top posts</h3>
          <ul className={classes['top-posts-list']}>
            <TopPostItem
              num='1'
              category='Sustainable Farming '
              postDate="March, 2022"
              title='How Regenerative Agriculture is Changing the Game'
            />
            <TopPostItem
              num='2'
              category='Precision Agriculture'
              postDate="September, 2021"
              title='Precision Agriculture 2.0: Using Artificial Intelligence to Optimize Crop Yields'
            />
            <TopPostItem
              num='3'
              category='Industry News'
              postDate="May, 2022"
              title='Breaking Ground: How Automation is Revolutionizing the Agriculture Industry'
            />
            <TopPostItem
              num='4'
              category='IoT'
              postDate="July, 2021"
              title="How Ouranos Robotics' Smart Sensors are Transforming Crop Management"
            />
            <TopPostItem
              num='5'
              category='Expert Insights'
              postDate="November, 2021"
              title='The Impact of Technology on the Agriculture Industry'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
