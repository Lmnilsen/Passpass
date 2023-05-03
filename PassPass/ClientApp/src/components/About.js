import React, { Component } from 'react';

export class About extends Component {
  static displayName = About.name;

  constructor(props) {
    super(props);
    this.state = { currentCount: 0 };
    this.incrementCounter = this.incrementCounter.bind(this);
  }

  incrementCounter() {
    this.setState({
      currentCount: this.state.currentCount + 1
    });
  }

  render() {
    return (
      <div>
        <h1 className='display-3 mt-5'> About PassPass: </h1>
        <p><br></br> Protect your online accounts with our password manager! <br></br>
        With the increasing number of online services and the growing threat of data breaches, 
        having strong and unique passwords for each account has become essential.<br></br>
        Our password manager offers a reliable and convenient solution to generate, 
        store, and manage complex passwords, so you don't have to remember them all.<br></br> <br></br>
        Join us in creating a safer online environment for everyone.

        </p>
        {/* <h1>Counter</h1>

        <p>This is a simple example of a React component.</p>

        <p aria-live="polite">Current count: <strong>{this.state.currentCount}</strong></p>

        <button className="btn btn-primary" onClick={this.incrementCounter}>Increment</button> */}
      </div>
    );
  }
}
