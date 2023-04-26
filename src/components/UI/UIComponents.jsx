import React from 'react';
import classes from './UiComponents.module.scss'

export function NavList() {
  return (
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
  );
}


export function Button() {
  return <button className={classes["nav-btn"]}>Buy now</button>
} 

