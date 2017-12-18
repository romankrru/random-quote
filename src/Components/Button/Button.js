import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.css';

const Button = ({ className, children, ...rest }) => (
  <button
    className={`${styles.Button} ${className}`}
    {...rest}
  >
    {children}
  </button>
);

Button.defaultProps = {
  className: '',
  children: null,
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Button;
