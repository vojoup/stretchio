import React, { Component } from 'react';
import Section from '../section/section';
import Excercises from './excersises.json';

export default class Dashboard extends Component {
  renderSections(excercises) {
    return excercises.map(e => (
      <Section name={e.name} excercises={e.excercises} key={e.name} />
    ));
  }

  render() {
    return <div>{this.renderSections(Excercises)}</div>;
  }
}
