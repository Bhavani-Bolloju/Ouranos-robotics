import React from 'react';
import classes from './Pagination.module.scss'

function Pagination(props) {

  const { currentPage, maxPageLimit, minPageLimit, ItemsPerPage } = props;

  const pages_total = Math.ceil(props.response.length / ItemsPerPage);

//event handlers
  
  const handlePrevClick = function () {
    props.onPrevClick();

  }
  const handleNextClick = function () {
    props.onNextClick();
  }
  const handlePageClick = function (e) {
    props.onPageChange(Number(e.target.id))
  }

  //pages array based on totalPages available

    const pages = [];
    for (let i = 1; i <= pages_total; i++){
      pages.push(i);
  }
  

  const pageNumbers = pages.map(page => {
    if (page <= maxPageLimit && page > minPageLimit) {
      return (
        <li key={page} id={page} onClick={handlePageClick} className={currentPage === page ? classes['active'] : null}>{page}</li>
      );
    } else {
      return null
    }
  })

  //creating ellipsis dots
  let pageIncrementEllipses = null;

  if (pages.length > maxPageLimit) {
    pageIncrementEllipses = <li onClick={handleNextClick}>&hellip;</li>
  } 


  let pageDecrementEllipses = null;
  if (minPageLimit >= 1) {
    pageDecrementEllipses = <li onClick={handlePrevClick}>&hellip;</li>
  }

  return (
    <div>
      <ul className={classes['page-numbers']}>
        <li>
          <button disabled={currentPage <=1 } onClick={handlePrevClick }>prev</button>
        </li>
        {pageDecrementEllipses}
        {pageNumbers}
        { pageIncrementEllipses}
        <li>
          <button disabled={currentPage >= pages_total  } onClick={handleNextClick}>Next</button>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
