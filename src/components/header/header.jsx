import React, { Component } from 'react';
import './header.scss';

export default class Header extends Component {
  render() {
    return (
      <header>
        <h1>
          Stretch
          <span>io</span>
          <span role="img" aria-label="Person Cartwheeling emoji" />
          🤸
        </h1>
      </header>
    );
  }
}
