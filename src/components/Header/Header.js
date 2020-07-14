import React, { Component } from 'react';
import logo from './logo.svg';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="appBar">
        <img className="logo" src={logo} alt="logo" />
        <h1 className="primaryHdg">React Local State and Props</h1>
      </header>
    );
  }
}

export default Header;