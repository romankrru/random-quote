import React from 'react';

import ProgressBarComponent from '../../Components/ProgressBar/ProgressBar';

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      translateValue: -100,
      animationInProgress: false
    };

    this.svgWidth = document.body.clientWidth;
  }

  startAnimation = () => {
    this.setState({
      translateValue: -100,
      animationInProgress: true
    });

    this.startAnimationTimerId = setInterval(() => {
      if (!this._isMounted) {
        return;
      }

      this.setState((prevState) => {
        return {
          translateValue: prevState.translateValue + Math.abs(prevState.translateValue * .1)
        }
      });
    }, 500);
  }

  stopAnimation = () => {
    clearInterval(this.startAnimationTimerId);

    this.setState((prevState) => {
      return {
        translateValue: 0
      }
    });

    this.stopAnimationTimerId = setTimeout(() => {
      if (this._isMounted === false) {
        return;
      }

      this.setState({
        animationInProgress: false
      })
    }, 500);
  }

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillReceiveProps(nextProps) {
    // start animation
    if (
      nextProps.startProgress === true  &&
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
    this._isMounted = false;
  }

  render() {
    return (
      <ProgressBarComponent
        animationInProgress={this.state.animationInProgress}
        width={this.svgWidth}
        translateValue={this.state.translateValue}
      />  
    );
  }
};

export default ProgressBar;