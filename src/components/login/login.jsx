import React, { Component } from 'react';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin() {
    const { login } = this.props;
    login();
  }

  render() {
    return (
      <div>
        <button onClick={this.handleLogin}>Login!</button>
      </div>
    );
  }
}
