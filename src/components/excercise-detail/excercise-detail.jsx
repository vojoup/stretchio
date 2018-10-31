import React, { Component } from 'react';
import './exercise-detail.scss';

export default class ExcerciseDetail extends Component {
  renderExcercises() {}

  render() {
    const { match } = this.props;
    const { name } = match.params;
    return (
      <h2>
        Let's stretch your <span className="body-part">{name}</span>!
      </h2>
    );
  }
}
