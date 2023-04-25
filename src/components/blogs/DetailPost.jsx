import React from 'react';
import { useParams } from 'react-router-dom';
import { postsData } from '../data/data';
import classes from './DetailPost.module.scss';
import PostContent from './PostContent';
import Comments from './Comments';
import Sidebar from '../side-bar/Sidebar';

function DetailPost() {

  const { id } = useParams();  

  const post = postsData.filter(post => post.id === id);
  return (
    <section className={classes.post}>
      <div className={classes['post-details']}>
        <PostContent post={post } />
      </div>
      <div className={classes['post-sidebar']}>
        <Sidebar/>
      </div>
      <div className={classes["post-comments"]}>
        <Comments/>
      </div>
    </section>
  );
}

export default DetailPost;
