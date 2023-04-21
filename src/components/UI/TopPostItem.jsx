import React from 'react';
import classes from './TopPostItem.module.scss'

function TopPostItem({num, title, category, postDate  }) {
  return (
    <li className={classes['top-post-item']}>
      <span className={classes['top-post-num']}>{ num}</span>
              <div>
               <div className={classes['top-post-title']}>{ title}</div>
                <div className={classes['top-post-info']}>
                  <span >{category }</span>
                  <span> {postDate }</span>
                </div>
              </div>
       </li>
  );
}

export default TopPostItem;
