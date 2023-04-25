import React, { useState } from 'react';
import Pagination from '../UI/Pagination';
import classes from './Blogs.module.scss';

import BlogPost from './BlogPost';
import { postsData } from '../data/data';


function Blogs({ inputValue}) {
  const [blogPosts, setBlogPosts] = useState(postsData);



  const pageNumberLimit = 5;
  const ItemsPerPage = 6;

  const [currentPage, setCurrentPage] = useState(1);
  const [maxPageLimit, setMaxPageLimit] = useState(5);
  const [minPageLimit, setMinPageLimit] = useState(0);

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  const onPrevClick = () => {
      if ((currentPage - 1) % pageNumberLimit === 0) {
        setMaxPageLimit(maxPageLimit - pageNumberLimit);
        setMinPageLimit(minPageLimit - pageNumberLimit);
      }

    setCurrentPage(prev => prev - 1);
  }
  const onNextClick = () => {

    if (currentPage + 1 > maxPageLimit) {
      setMaxPageLimit(maxPageLimit + pageNumberLimit);
      setMinPageLimit(minPageLimit + pageNumberLimit);
    }
    setCurrentPage(prev => prev + 1);
  }


  const paginationAttribute = {
    currentPage, maxPageLimit, minPageLimit, response: blogPosts,ItemsPerPage
  }

  const filterBlogList = blogPosts.filter(post => post.category.toLowerCase().includes(inputValue.toLowerCase()) || post.content.toLowerCase().includes(inputValue.toLowerCase()) );

  return (
    <>
    <div className={classes['blogs']}>
        {filterBlogList.slice((currentPage-1)*ItemsPerPage , currentPage*ItemsPerPage).map((post, i) => {
          return (
            <BlogPost
              key={post.id}
              title={post.title }
              category={post.category }
              date={post.date }
              image={post.image}
              content={post.content}
              id={post.id}
            />)
        })}
       
    </div>
        <Pagination {...paginationAttribute} onPrevClick={onPrevClick} onNextClick={onNextClick} onPageChange={onPageChange} />
    </>
  );
}   

export default Blogs;
