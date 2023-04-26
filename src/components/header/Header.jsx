import React, { useState } from 'react';
import classes from './Header.module.scss';
import { RxHamburgerMenu } from 'react-icons/rx';
import { NavList,Button } from '../UI/UIComponents';

function Header() {

  const [isOpen, setIsOpen] = useState(false)

  const hamburgerHandler = function () {
    setIsOpen(prev => !prev)
  }

  console.log(isOpen)

  return (
    <header className={classes.header}>
      <div className={classes['header-container']}>
      <p className={classes.heading}>Ouranos Robotics</p>
        <nav className={classes.nav}>
          <NavList/>
        </nav> 
        <div className={classes['btn-buy']}>

       <Button/>
        </div>
      <RxHamburgerMenu onClick={hamburgerHandler}/>
      </div>
      <nav className={!isOpen ? classes["nav-active"] :
        `${classes['nav-active']} ${classes['active']}`
      
      }>
        <NavList/>

        <div className={classes['btn']}>
          <Button/>
        </div>
      </nav> 

    </header>
  );
}

export default Header;
