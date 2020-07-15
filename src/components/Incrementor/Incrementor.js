import React, { Component } from 'react';

// let VALUE = 3;

class Incrementor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentScore: 3,
      name: ''
    }
  }

  clickMinus = () => {
    console.log('Clicked Minus');
    this.setState({
      currentScore: this.state.currentScore - 1
    });
    // this.state.value =  this.state.value - 1;
    console.log(this.state.currentScore);
  }

  clickPlus = () => {
    console.log('Clicked Plus');
    this.setState({
      currentScore: this.state.currentScore + 1
    });
    // this.state.value =  this.state.value - 1;
    console.log(this.state.currentScore);
  }

  render() {
    console.log('RENDER THINGS');
    return (
      <div>
        <h3>{this.props.firstName} Scored: {this.state.currentScore}</h3>
        <button onClick={this.clickMinus}>minus</button>
        <button onClick={this.clickPlus}>plus</button>
      </div>
    );
  }
}

export default Incrementor;