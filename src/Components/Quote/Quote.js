import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import styles from './Quote.css';

class Quote extends React.Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.text !== nextProps.text) {
      return true;
    }

    if (this.props.author !== nextProps.author) {
      return true;
    }

    return false;
  }


  render() {
    const { text, author } = this.props;

    if (!text || !author) {
      return null;
    }

    const [authorFirstName, authorLastName] = author.trim().split(' ');

    return (
      <ReactCSSTransitionGroup
        transitionName="quote-animation"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        <blockquote className={styles.Quote} key={Math.random()}>
          <p className={styles.author}><span>{authorFirstName}</span> <span>{authorLastName}</span></p>
          <p className={styles.text}>{text}</p>
        </blockquote>
      </ReactCSSTransitionGroup>
    );
  }
}

export default Quote;