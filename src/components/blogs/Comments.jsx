import React from 'react';
import classes from './Comments.module.scss';
import { useState } from 'react';
import BackDrop from '../UI/BackDrop';


const userComments = [
  {
    name: 'harsh',
    commentText:'very informative'
  },
  {
    name: 'anandh',
    commentText:"It's so important to support local farmers and food systems, and organic farming is a key part of that"
  },
  {
    name: 'Mayra',
    commentText:"I appreciate the discussion on the challenges of organic farming. It's not a perfect solution, but it's a step in the right direction"
  },
  {
    name: 'Aryan',
    commentText:"This article does a great job of highlighting the benefits of organic farming without demonizing conventional agriculture."
  },
  {
    name: 'Priya',
    commentText:"Important topic, thanks for raising awareness!"
  },
  

]


function Comments() {

  const [onInputFocus, setOnInputFocus] = useState(false);

  console.log(onInputFocus);

  const closeHandler = function () {
    setOnInputFocus(false);
  }


  return (
    <div className={classes['comments']}>
      <h3>comments</h3>
      <input type="text" placeholder='write comment' onFocus={() => setOnInputFocus(true)}  />
      
     {onInputFocus && <form action="" className={classes['comments-form']}>
        <input type="text" className={classes['input-name'] } placeholder='name'/>
        <input type="email" className={classes['input-email'] } placeholder='email'/>
        <textarea placeholder='your comment' name="comment" id="comment" rows="2" className={classes['input-comment']}></textarea>
        <button>Add</button>
      </form>
      }
      <div className={classes['user-comments']}>

      <ul >
        {userComments.map((item,i) => {
          return <li key={i}>
            <div className={classes['user-name']}>{ item.name}</div>
            <div className={classes['user-comment']}>{item.commentText }</div>
          </li>
        })}
      </ul>
      </div>
      {onInputFocus && <BackDrop onClose={closeHandler} />}
    </div>
  );
}

export default Comments;
