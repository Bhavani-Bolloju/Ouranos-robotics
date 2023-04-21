import React from 'react';
import classes from './Header.module.scss'

function Header() {
  return (
    <header className={classes.header}>
      <div className={classes['header-container']}>
      <p className={classes.heading}>Ouranos Robotics</p>
      <nav className={classes.nav}>
        <ul className={classes['nav-list']}>
          <li className={classes["nav-items"]}>
            <a href="">Home</a>
          </li>
          <li className={classes["nav-items"]}>
            <a href="">Product</a>
          </li>
          <li className={classes["nav-items"]}>
            <a href="">about us</a>
          </li>
          <li className={classes["nav-items"]}>
            <a href="">support</a>
          </li>
          <li className={classes["nav-items"]}>
            <a href="">blog</a>
          </li>
        </ul>
      </nav> 
      <button className={classes["nav-btn"]}>Buy now</button>
      </div>
    </header>
  );
}

export default Header;
