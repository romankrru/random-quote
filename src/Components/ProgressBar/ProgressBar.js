import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProgressBar.css';

class ProgressBar extends React.Component {
  static propTypes = {
    startProgress: PropTypes.bool.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      translateValue: -100,
      animationInProgress: false,
    };

    this.svgWidth = document.body.clientWidth;
  }

  componentDidMount() {
    this.isComponentMounted = true;
  }

  componentWillReceiveProps(nextProps) {
    // start animation
    if (
      nextProps.startProgress === true &&
      this.state.animationInProgress === false
    ) {
      this.startAnimation();
    }

    // stop animation
    if (
      nextProps.startProgress === false &&
      this.state.animationInProgress === true
    ) {
      this.stopAnimation();
    }
  }

  componentWillUnmount() {
    clearInterval(this.startAnimationTimerId);
    clearTimeout(this.stopAnimationTimerId);
    this.isComponentMounted = false;
  }

  startAnimation = () => {
    this.setState({
      translateValue: -100,
      animationInProgress: true,
    });

    this.startAnimationTimerId = setInterval(() => {
      if (!this.isComponentMounted) {
        return;
      }

      this.setState(prevState => ({
        translateValue: prevState.translateValue + Math.abs(prevState.translateValue * 0.1),
      }));
    }, 500);
  }

  stopAnimation = () => {
    clearInterval(this.startAnimationTimerId);

    this.setState(() => ({
      translateValue: 0,
    }));

    this.stopAnimationTimerId = setTimeout(() => {
      if (this.isComponentMounted === false) {
        return;
      }

      this.setState({
        animationInProgress: false,
      });
    }, 500);
  }

  render() {
    return (
      <svg height="10" width={this.svgWidth} className={styles.progressbar}>
        {
          this.state.animationInProgress &&
          <line
            className={styles.progressbar__line}
            stroke="#b17200"
            strokeWidth="2"
            x1="0"
            y1="1"
            x2="100%"
            y2="1"
            style={{ transform: `translateX(${this.state.translateValue}%)` }}
          />
        }
      </svg>
    );
  }
}


export default ProgressBar;
