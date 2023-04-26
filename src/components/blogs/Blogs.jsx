import React, { useEffect, useState } from 'react';
import Pagination from '../UI/Pagination';
import classes from './Blogs.module.scss';

import BlogPost from './BlogPost';
import { InputSearch } from '../UI/UIComponents';

function Blogs({ inputValue,onInput}) {
  const [blogPosts, setBlogPosts] = useState([]);

  const fetchData = async function () {
    const req = await fetch('https://ouranos-f5357-default-rtdb.firebaseio.com/posts.json');
    const res = await req.json();
  
    setBlogPosts(res)
  }

  useEffect(() => {
    fetchData()
  },[])


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
      <div className={classes['blog-search']}>

        <InputSearch onSearch={onInput} value={inputValue } />
      </div>
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
              id={i}
            />)
        })}
       
    </div>
        <Pagination {...paginationAttribute} onPrevClick={onPrevClick} onNextClick={onNextClick} onPageChange={onPageChange} />
    </>
  );
}   

export default Blogs;
