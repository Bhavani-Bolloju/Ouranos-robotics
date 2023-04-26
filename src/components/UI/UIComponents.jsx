import React from 'react';
import classes from './UiComponents.module.scss';
import { TfiSearch } from 'react-icons/tfi';

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



export function InputSearch({onSearch, value }) {
  return (
    <form className={classes['search']}>
      <input onChange={(e) => onSearch(e.target.value)} type="text" placeholder='Search' value={value} />
      <button> <TfiSearch /></button>
    </form>
  );
}