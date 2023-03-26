
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Form, Card, Col } from 'react-bootstrap';
import { Row } from 'reactstrap';

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
        <h2 class = "text-center">Login</h2>
          <Form>
            <Row className="justify-content-center">
          <Col xs={5}>
          <Card >
          <Card.Body>
            {/* Email input */}
          <div class="form-outline mb-4">
            <input type="email" id="form2Example1" class="form-control" />
            <label class="form-label" for="form2Example1">Email address</label>
          </div>
          

          {/* Password input */}
          <div class="form-outline mb-4">
            <input type="password" id="form2Example2" class="form-control" />
            <label class="form-label" for="form2Example2">Password</label>
          </div>

          {/* 2 column grid layout for inline styling */}
          <div class="row mb-4">
            <div class="col d-flex justify-content-center">
              {/* Checkbox */}
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                <label class="form-check-label" for="form2Example31"> Remember me </label>
              </div>
            </div>

            <div class="col">
              {/* Simple link */}
              <a href="#!">Forgot password?</a>
            </div>
          </div>

           {/* Submit button */}
          <button type="button" class="btn btn-primary btn-block mb-4">Sign in</button>

          {/* Register buttons */}
          <div class="text-center">
            <p>Not a member? <a href="#!">Register</a></p>
            <p>or sign up with:</p>
            <button type="button" class="btn btn-link btn-floating mx-1">
              <i class="fab fa-facebook-f"></i>
            </button>

            <button type="button" class="btn btn-link btn-floating mx-1">
              <i class="fab fa-google"></i>
            </button>

            <button type="button" class="btn btn-link btn-floating mx-1">
              <i class="fab fa-twitter"></i>
            </button>

            <button type="button" class="btn btn-link btn-floating mx-1">
              <i class="fab fa-github"></i>
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
