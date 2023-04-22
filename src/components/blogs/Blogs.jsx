import React, { useEffect, useState } from 'react';
import Pagination from '../UI/Pagination';
import classes from './Blogs.module.scss';
import organic_farming from '../../assets/organic-farming.jpg';
import BlogPost from './BlogPost';
import { postsData } from '../data/data';

function Blogs() {
  const [blogPosts, setBlogPosts] = useState(postsData)

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

  return (
    <>
    <div className={classes['blogs']}>

        {blogPosts.slice((currentPage-1)*ItemsPerPage , currentPage*ItemsPerPage).map((post, i) => {
          // console.log(post.image)
          return (
            <BlogPost
              key={i}
              title={post.title }
              category={post.category }
              date={post.date }
              image={post.image}
              content={post.content}
            />)
        })}
    
        {/* <BlogPost
          title='Organic Farming: How It Can Help Save the Planet' content="Learn about the benefits of organic farming and how it can help reduce the environmental impact of agriculture."
          category="Sustainable Farming"
          date='april, 2023'
          image={organic_farming}
        /> */}
       
    </div>
        
        <Pagination {...paginationAttribute} onPrevClick={onPrevClick} onNextClick={onNextClick} onPageChange={onPageChange} />
    </>
  );
}   

export default Blogs;
