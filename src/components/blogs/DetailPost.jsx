import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { postsData } from '../data/data';
import classes from './DetailPost.module.scss';
import PostContent from './PostContent';
import Comments from './Comments';
import Sidebar from '../side-bar/Sidebar';

function DetailPost() {

  const { id } = useParams();
  const [post, setPost] = useState(null);

  //fetch data and pass to the children

  const fetchPost = async function () {
    const req = await fetch(`https://ouranos-f5357-default-rtdb.firebaseio.com/posts/${id}.json`)
    const res = await req.json();
  
    setPost(res)
  }

  useEffect(() => {
    fetchPost()
  }, [])
  
  // console.log(post)

  // const post = postsData.filter(post => post.id === id);
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
          <Comments comments={post.comments } />
      </div>
    </section>}
    </>
  );
}

export default DetailPost;
