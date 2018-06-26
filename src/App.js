import React, { Component } from 'react';
import './App.css';
import ColorPart from './components/ColorPart/ColorPart';
import Button from './components/Button/Button';
import Lifes from './components/Lifes/Lifes';
import Message from './components/Message/Message';
import Info from './components/Info/Info';

const colors = ['red', 'yellow', 'gray', 'blue', 'purple'];

class App extends Component {  
  state = {
    backgroundColor: '',
    textColor: '',
    answer: true,
    lifesLeft: 3,
    score: 0,
    attempts: 0,
    fail: false,
    win: false,
    was: 0,
    now: 0
  };
  
  pickRandomColor = () => {
    const index = Math.floor(Math.random() * 5);
    return colors[index];
  }

  newGame = () => {
    const backgroundColor = this.pickRandomColor();
    const textColor = this.pickRandomColor();
    const currentTime = new Date().getTime();
    this.setState({
      backgroundColor: backgroundColor,
      textColor: textColor,
      answer: backgroundColor === textColor,
      was: currentTime,
      now: currentTime,
      lifesLeft: 3,
      score: 0,
      attempts: 0,
      fail: false,
      win: false
    });  
    clearInterval(this.timer);
    this.timer = setInterval(() => {
      this.setState({
        now: new Date().getTime()
      });
    }, 1000);
  }

  prepareGame = () => {
    const backgroundColor = this.pickRandomColor();
    const textColor = this.pickRandomColor();
    const currentTime = new Date().getTime();
    this.setState({
      backgroundColor: backgroundColor,
      textColor: textColor,
      answer: backgroundColor === textColor,
      was: currentTime,
      now: currentTime
    });  
    clearInterval(this.timer);
    this.timer = setInterval(() => {
      this.setState({
        now: new Date().getTime()
      });
    }, 1000);
  }

  secondsPassed = () => {
    const difference = Math.floor((this.state.now - this.state.was) / 1000);
    return difference;
  }

  handleClick = (userAnswer) => {
    let scoreChange = (this.state.answer === userAnswer ? 1 : 0);
    let lifeChange = (this.state.answer === userAnswer ? 0 : -1);
    this.setState(prevState => {
      return {
        lifesLeft: prevState.lifesLeft + lifeChange,
        score: prevState.score + scoreChange,
        attempts: prevState.attempts + 1,
        fail: prevState.lifesLeft + lifeChange === 0,
        win: prevState.score + scoreChange === 10
      }
    });
    this.prepareGame();
  }

  componentDidMount() {
    this.prepareGame();
  }

  render() {
    if (this.state.fail) {
      return (
        <Message 
          message="The next time you will win!" 
          prepareGame={this.newGame}
        />
      );
    }

    if (this.state.win) {
      return (
        <Message 
          message="What a good game, bro!"
          prepareGame={this.newGame}
        />
      );
    }

    if (this.secondsPassed() === 5) {
      this.setState(prevState => {
        return {
          lifesLeft: prevState.lifesLeft - 1,
          attempts: prevState.attempts + 1,
          fail: prevState.lifesLeft === 1
        }
      });
      this.prepareGame();
    }

    const secondsPassed = this.secondsPassed();

    return (
      <div className="App">
        <ColorPart 
          backgroundColor={this.state.backgroundColor}
          textColor={this.state.textColor}
        />
        <Button type="success" onClick={this.handleClick.bind(this, true)}>
          True
        </Button>
        <Button type="danger" onClick={this.handleClick.bind(this, false)}>
          False
        </Button>
        <Lifes 
          lifesLeft={this.state.lifesLeft}
        />
        <Info 
          score={this.state.score}
          attempts={this.state.attempts}
          secondsPassed={secondsPassed}
        />
        <p className="Author">
          Made with <i className="fa fa-heart" /> by Yussupov Temirzhan for N17R
        </p>
      </div>
    );
  }
}

export default App;

