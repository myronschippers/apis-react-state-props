import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Body from '../Body/Body';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;
