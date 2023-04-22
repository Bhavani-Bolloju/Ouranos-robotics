import React from 'react';
import classes from './BlogPost.module.scss'

function BlogPost({category, image, date, title, content }) {
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
      <a href='#'>read full article</a>
    </div>
  </article>
  );
}

export default BlogPost;
