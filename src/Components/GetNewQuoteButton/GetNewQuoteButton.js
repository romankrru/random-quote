import React from 'react';

import Button from '../Button/Button';

import styles from './GetNewQuoteButton.css';
import reloadIcon from '../../images/reload-icon.png';

const GetNewQuoteButton = (props) => {
  const clickHandler = () => {
    if (props.isLoading === true) {
      return;
    }

    props.onClick();
  };

  return (
    <Button
      onClick={clickHandler}
      className={`
        ${styles.GetNewQuoteButton }
        ${props.isLoading ? styles['GetNewQuoteButton--loading'] : ''}
      `}
    >
      <img src={reloadIcon}/>
    </Button>
  );
};

export default GetNewQuoteButton;