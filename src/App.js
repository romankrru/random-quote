import React, { Component } from 'react';
import axios from 'axios';

import ProgressBar from './Containers/ProgressBar/ProgressBar';
import Quote from './Components/Quote/Quote';
import GetNewQuoteButton from './Components/GetNewQuoteButton/GetNewQuoteButton';

import githubLogo from './images/github.png';
import styles from './App.css';

class App extends Component {
  state = {
    quote: {
      author: '',
      text: ''
    },
    isLoading: false
  }

  getQuote = () => {
    this.setState({isLoading: true});

    axios.get('https://talaikis.com/api/quotes/random/ ')
      .then(({ data }) => {
        const quote = {
          text: data.quote,
          author: data.author
        };

        this.setState({ quote, isLoading: false });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.getQuote();
  }

  render() {
    const {
      author,
      text,
    } = this.state.quote;

    return (
      <div className={styles.App}>
        <ProgressBar startProgress={this.state.isLoading} />
        <GetNewQuoteButton onClick={this.getQuote} isLoading={this.state.isLoading} />
        <Quote author={author} text={text} />

        <a className={styles['github-link']} href="https://github.com/romankrru/random-quote">
          <img src={githubLogo}/>
        </a>

      </div>
    );
  }
}

export default App;
