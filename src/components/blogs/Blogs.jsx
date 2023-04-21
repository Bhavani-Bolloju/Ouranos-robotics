import React, { useEffect, useState } from 'react';
import Pagination from '../UI/Pagination';

function Blogs() {
  const [passangerData, setPassengerData] = useState(["blog1", "blog2", "blog3", "blog4",
    'blog5',
    'blog6',
    'blog7',
    'blog8',
  
   
  ])

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
    currentPage, maxPageLimit, minPageLimit, response: passangerData,ItemsPerPage
  }

  return (
    <>
    <div className='blogs'>
        {passangerData.slice((currentPage-1)*ItemsPerPage , currentPage*ItemsPerPage).map((item,i) =>
          <div key={i}>{item}</div>)
        }
    </div>
      <div className='pagination'>
        <Pagination {...paginationAttribute} onPrevClick={onPrevClick} onNextClick={onNextClick} onPageChange={onPageChange} />
      </div>
    </>
  );
}   

export default Blogs;
