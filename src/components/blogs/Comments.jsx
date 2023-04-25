import React from 'react';
import classes from './Comments.module.scss';

function Comments() {
  return (
    <div className={classes['comments']}>
      <h3>comments</h3>
      <input type="text" placeholder='write comment' />
    </div>
  );
}

export default Comments;
