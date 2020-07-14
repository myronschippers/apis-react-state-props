import React, { Component } from 'react';

// custom components
import Incrementor from '../Incrementor/Incrementor';

class Body extends Component {
  state = {
    player1: 'Tim',
    player2: 'Shelby',
    player3: 'Ailea',
    // option to add additional player4
  }

  clickNewPlayer = () => {
    this.setState({
      player3: 'Ryan',
      player2: 'RYAN',
      player4: 'New Doug'
    })
  }

  render() {
    return (
      <div className="container">
        <h2>Welcome to the incrementor...</h2>
        <p>What's happening here?</p>
        <button onClick={this.clickNewPlayer}>NEW PLAYER</button>
        <Incrementor firstName="Tim"/>
        <Incrementor firstName={this.state.player2}/>
        <Incrementor firstName={this.state.player3}/>
        <Incrementor firstName={this.state.player4}/>
      </div>
    );
  }
}

export default Body;