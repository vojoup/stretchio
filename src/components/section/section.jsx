import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './section.scss';

class Section extends Component {
  constructor(props) {
    super(props);
    this.navigateToSectionDetail = this.navigateToSectionDetail.bind(this);
  }

  navigateToSectionDetail(name) {
    const { history } = this.props;
    history.push(`/${name}`);
  }

  render() {
    const { name } = this.props;
    return (
      <div
        className="section"
        onClick={() => this.navigateToSectionDetail(name)}
      >
        <h2>{name}</h2>
      </div>
    );
  }
}

export default withRouter(Section);
