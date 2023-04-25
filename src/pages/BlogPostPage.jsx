import React from 'react';
import classes from './BlogPostPage.module.scss';
import { Outlet, useNavigate } from 'react-router-dom';
import { BsTwitter ,BsFacebook,BsWhatsapp,BsArrowLeft,BsLinkedin} from 'react-icons/bs';
import { MdOutlineContentCopy } from 'react-icons/md';

function BlogPostPage() {
  const navigate = useNavigate();
  return (
    <div className={classes.blogPostPage}>
      <header className={classes['header-container']}>
        <div className={classes['header']}>
        <BsArrowLeft onClick={()=> navigate('/')} className={classes['btn-back'] } />
        <div>
          <button className={classes['btn-copy']}>
            <MdOutlineContentCopy/>
            <span>copy link</span>
          </button>
          <BsTwitter/>
          <BsFacebook/>
          <BsLinkedin/>
          <BsWhatsapp/>
        </div>
        </div>
      </header>
       <Outlet/>
    </div>
  );
}

export default BlogPostPage;
