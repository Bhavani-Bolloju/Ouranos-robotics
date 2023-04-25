import React from 'react';
import classes from './BlogPost.module.scss';
import { useNavigate } from 'react-router-dom';

function BlogPost({ category, image, date, title, content,id }) {
  
  const navigate = useNavigate();

  return (
    <article className={classes['blog-post']}>
      <img className={classes['blog-post-image']} src={image} alt={category } />
    <div className={classes['blog-post-content']}>
      <div className={classes['blog-post-info']}>
          <span>{ category}</span>
          <span>{date }</span>
      </div>
        <p className={classes['blog-post-title']}>{ title}</p>
      <p className={classes["blog-post-text"]}>{content}</p>
      <button onClick={()=> navigate(`/blog/${id}`)}>read full article</button>
    </div>
  </article>
  );
}

export default BlogPost;
