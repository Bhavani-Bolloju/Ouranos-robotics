import React from 'react';
import classes from './BackDrop.module.scss';

function BackDrop({onClose}) {
  return (
    <div onClick={onClose} className={classes.backdrop}>
    </div>
  );
}

export default BackDrop;
