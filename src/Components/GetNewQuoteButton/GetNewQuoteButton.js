import React from 'react';
import PropTypes from 'prop-types';

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
        ${styles.GetNewQuoteButton}
        ${props.isLoading ? styles['GetNewQuoteButton--loading'] : ''}
      `}
    >
      <img alt="Reload" src={reloadIcon} />
    </Button>
  );
};

GetNewQuoteButton.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default GetNewQuoteButton;

