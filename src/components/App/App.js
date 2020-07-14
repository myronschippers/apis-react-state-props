import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Body from '../Body/Body';
import Incrementor from '../Incrementor/Incrementor';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Incrementor />
        <Body />
      </div>
    );
  }
}

export default App;
