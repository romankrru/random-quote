import React from 'react';
import styles from './Button.css';

const Button = ({className = '', children,...rest}) => {
  return (
    <button
      className={`${styles.Button} ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
};

export default Button;