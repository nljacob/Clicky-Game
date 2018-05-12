import React, { Component } from 'react';
// import logo from './logo.svg';

import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";

import cupcakes from "./cupcakes.json";

import './App.css';

class App extends Component {
  state = {
    score: 0,
    topScore: 0,
    cupcakes: cupcakes,
    clicked: []
  }

  click = name => {
    const cupcake = this.state.clicked.indexOf(name);
      console.log(cupcake);
    if (cupcake === -1 && this.state.score < 11) {
      const correct = name;
      console.log(name);
      this.setState({
        score: this.state.score + 1,
        topScore: this.state.score > this.state.topScore ? 
          this.state.score 
          :
          this.state.topScore,
        cupcakes: cupcakes,
        clicked: this.state.clicked.concat(correct)
      });
      console.log(this.state);
    } else if (cupcake === -1 && this.state.score === 11) {
      console.log(name);
      this.setState({
        score: 0,
        topScore: 12,
        cupcakes: cupcakes,
        clicked: []
      });
      console.log(this.state);
    } else {
      this.setState({
        score: 0,
        topScore: this.state.score > this.state.topScore ? 
          this.state.score 
          :
          this.state.topScore,
        cupcakes: cupcakes,
        clicked: []
      });
      console.log(this.state);
    }
    this.shuffle(cupcakes);
  }

  shuffle = array => {
    for (let i=array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  

  render() {
    console.log(this.state);
    return (
      <div className = "wrapper">
        <Navbar
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Jumbotron />
        <div className = "container">
          {
          this.state.cupcakes.map(cupcake => (
            <Card 
              name ={cupcake.name}
              source = {cupcake.source}
              click = {this.click}
            />
          ))
        }
        </div>
      </div>
    );
  }
}

export default App;

