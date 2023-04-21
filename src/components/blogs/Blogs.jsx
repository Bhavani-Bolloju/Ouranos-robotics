import React, { useEffect, useState } from 'react';
import Pagination from '../UI/Pagination';

function Blogs() {
  const [passangerData, setPassengerData] = useState(["blog1", "blog2", "blog3", "blog4",
    'blog5',
    'blog6',
    'blog7',
    'blog8',
    'blog9',
    'blog11',
    'blog12',
    'blog13',
    'blog14',
    'blog15',
    'blog16',
    'blog17',
    'blog18',
    'blog19',
    'blog20',
    'blog21',
    'blog22',
    'blog23',
    'blog24',
  ])

  const pageNumberLimit = 5;
  const ItemsPerPage = 6;

  const [currentPage, setCurrentPage] = useState(1);
  const [maxPageLimit, setMaxPageLimit] = useState(5);
  const [minPageLimit, setMinPageLimit] = useState(0);

  // useEffect()
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

  console.log((currentPage-1)*6 , currentPage*6)

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
