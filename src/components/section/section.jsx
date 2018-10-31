import React, { Component } from 'react';
import './section.scss';

export default class Section extends Component {
  render() {
    const { name } = this.props;
    console.log('props', this.props);
    return (
      <div className="section">
        <h2>{name}</h2>
      </div>
    );
  }
}
