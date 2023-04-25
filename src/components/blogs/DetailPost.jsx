import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import classes from './DetailPost.module.scss';
import PostContent from './PostContent';
import Comments from './Comments';
import Sidebar from '../side-bar/Sidebar';

function DetailPost() {

  const { id } = useParams();
  const [post, setPost] = useState(null);

  //fetch data and pass to the children

  const fetchPost = async function (postId) {
    const req = await fetch(`https://ouranos-f5357-default-rtdb.firebaseio.com/posts/${postId}.json`)
    const res = await req.json();
    setPost(res)
  }

  useEffect(() => {
    if (id) {
      fetchPost(id)
    }
  }, [id])
  
  // console.log(post?.comments, 'post page')

  return (
    <>
   {post && <section className={classes.post}>
      <div className={classes['post-details']}>
        <PostContent post={post } />
      </div>
      <div className={classes['post-sidebar']}>
        <Sidebar/>
      </div>
      <div className={classes["post-comments"]}>
          <Comments comments={post?.comments } id={id} />
      </div>
    </section>}
    </>
  );
}

export default DetailPost;
