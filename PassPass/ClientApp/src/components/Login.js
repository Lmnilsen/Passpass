import React, { Component, useState } from 'react';

export class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      errorMessage: "",
    };

  }

  handleUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    // perform login logic here
    if (this.state.username === "exampleuser" && this.state.password === "examplepassword") {
      console.log("login successful");
    } else {
      this.setState({ errorMessage: "Invalid username or password" });
    }
  };


  render() {
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleUsernameChange}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
          </label>
          <br />
          <button type="submit">Login</button>
          {this.state.errorMessage && <p>{this.state.errorMessage}</p>}
        </form>
      </div>

    );
  }
}
