import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Form, Card, Col } from 'react-bootstrap';
import { Row } from 'reactstrap';
import { Navigate } from 'react-router-dom';

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
    console.log("login started");
    // this.props.updateLoginStatus(true);

    // perform login logic here
    if (this.state.username === "exampleuser" && this.state.password === "examplepassword") {
      console.log("login successful");
      this.props.updateLoginStatus(true); // Call the updateLoginStatus callback
      Navigate('/passwords');
    } else {
      this.setState({ errorMessage: "Invalid username or password" });
    }
  };


  render() {
    return (
      <div>
        <h2 className = "text-center">Login</h2>
          <Form>
            <Row className="justify-content-center">
          <Col xs={5}>
          <Card >
          <Card.Body>
            {/* Email input */}
          <div className="form-outline mb-4">
            <input type="email" id="form2Example1" className="form-control" value={this.state.username} onChange={this.handleUsernameChange}/>
            <label className="form-label" htmlFor="form2Example1">Email address</label>
          </div>
          

          {/* Password input */}
          <div className="form-outline mb-4">
            <input 
              type="password" 
              id="form2Example2" 
              className="form-control" 
              value={this.state.password} 
              onChange={this.handlePasswordChange}/>
            <label 
              className="form-label" 
              htmlFor="form2Example2">
              Password
            </label>
          </div>

          {/* 2 column grid layout for inline styling */}
          <div className="row mb-4">
            <div className="col d-flex justify-content-center">
              {/* Checkbox */}
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="form2Example31" defaultChecked />
                <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
              </div>
            </div>

            <div className="col">
              {/* Simple link */}
              <a href="#!">Forgot password?</a>
            </div>
          </div>

           {/* Submit button */}
          <button 
            type="button" 
            className="btn btn-primary btn-block mb-4" 
            onClick={this.handleSubmit}
          >
            Sign in
          </button>

          {/* Register buttons */}
          <div className="text-center">
            <p>Not a member? <a href="#!">Register</a></p>
            <p>or sign up with:</p>
            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-facebook-f"></i>
            </button>

            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-google"></i>
            </button>

            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-twitter"></i>
            </button>

            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-github"></i>
            </button>
          </div>
          </Card.Body>
          </Card>
          </Col>
          </Row>
        </Form>

        {/* <form onSubmit={this.handleSubmit}>
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
        </form> */}
    </div>
    );
  }
}
