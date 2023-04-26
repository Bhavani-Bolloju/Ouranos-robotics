import React, { useRef } from 'react';
import classes from './Comments.module.scss';
import { useState } from 'react';
import BackDrop from '../UI/BackDrop';


const userComments = [
  // {
  //   name: 'harsh',
  //   commentText:'very informative'
  // },
  // {
  //   name: 'anandh',
  //   commentText:"It's so important to support local farmers and food systems, and organic farming is a key part of that"
  // },
  // {
  //   name: 'Mayra',
  //   commentText:"I appreciate the discussion on the challenges of organic farming. It's not a perfect solution, but it's a step in the right direction"
  // },
  {
    name: 'Aryan',
    commentText:"This article does a great job of highlighting the benefits of organic farming without demonizing conventional agriculture."
  },
  {
    name: 'Priya',
    commentText:"Important topic, thanks for raising awareness!"
  },
]

function Comments({comments, id }) {
  const [onInputFocus, setOnInputFocus] = useState(false);
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [commentInput, setCommentInput] = useState('');
  const [userComments, setUserComments] = useState(comments)


  // console.log(comments, 'comments')
  const closeHandler = function () {
    setOnInputFocus(false);
  }
  
  const addCommentHandler =async function (e) {
    e.preventDefault();

    if (nameInput.length == 0 || emailInput.length == 0 || commentInput.length ==0) {
      return
    }

    const newComment = {
      name: nameInput,
      email: emailInput,
      comment: commentInput
    }

    const sendComment = await fetch(`https://ouranos-f5357-default-rtdb.firebaseio.com/posts/${id}/comments.json`, {
      method: "PUT",
      body: JSON.stringify([...comments,newComment ]),
      headers: {
        'content-type': "application/json"
      }
    });
    const res = await sendComment.json();
   

    setUserComments(prev => [...prev, newComment])

    closeHandler();
    setNameInput('');
    setEmailInput("");
    setCommentInput("");
  }

  return (
    <div className={classes['comments']}>
      <h3>comments</h3>
      <input type="text" placeholder='write comment' onFocus={() => setOnInputFocus(true)}  />
      
      {onInputFocus &&
        <form onSubmit={addCommentHandler} className={classes['comments-form']}>
          <input
            value={nameInput}
            type="text"
            className={classes['input-name']}
            placeholder='name'
            onChange={(e) => setNameInput(e.target.value)}
            />
          <input
            value={emailInput}
            type="email"
            className={classes['input-email']}
            placeholder='email'
            
            onChange={(e) => setEmailInput(e.target.value)}
            />
          <textarea
            value={commentInput}
            placeholder='your comment'
            name="comment"
            id="comment"
            rows="2"
            className={classes['input-comment']}
            onChange={(e) => setCommentInput(e.target.value)}
          />
         
        <button>Add</button>
      </form>
      }
      <div className={classes['user-comments']}>

      <ul >
        {userComments?.map((item,i) => {
          return <li key={i}>
            <div className={classes['user-name']}>{ item.name}</div>
            <div className={classes['user-comment']}>{item.comment }</div>
          </li>
        })}
      </ul>
      </div>
      {onInputFocus && <BackDrop onClose={closeHandler} />}
    </div>
  );
}

export default Comments;
