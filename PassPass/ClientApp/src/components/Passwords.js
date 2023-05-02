import React, { Component } from 'react';

export class Passwords extends Component {
  static displayName = Passwords.name;
  
  constructor(props) {
    super(props);
    this.state = { passwords: [], loading2: true, isLoggedIn: false };
  }

  componentDidMount() {
    this.getPasswordData();
  }
  
  static renderPasswordsTable(passwords) {
    return (
      <div>
        <table className='table table-striped' aria-labelledby="tabelLabe2">
          <thead>
            <tr>
              <th>App User</th>
              <th>Username</th>
              <th>Website</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {passwords.map(password =>
              <tr key={password.id}>
                <td>{password.appUsername.length > 30 ? `${password.appUsername.slice(0, 30)}...` : password.appUsername}</td>
                <td>{password.websiteUsername.length > 30 ? `${password.websiteUsername.slice(0, 30)}...` : password.websiteUsername}</td>
                <td>{password.website.length > 30 ? `${password.website.slice(0, 30)}...` : password.website}</td>
                <td>{password.password.length > 30 ? `${password.password.slice(0, 30)}...` : password.password}</td>
              </tr>
            )}
          </tbody>
        </table>

        <div className='mt-5'/>
        <form id="myForm" onSubmit={this.handleSubmit}>
          Website: <input type="text" name="website" style={{marginRight: '20px'}}  required></input>
          Website Username: <input type="text" name="username" style={{marginRight: '20px'}} required></input>
          Password: <input type="text" id="password" required></input>
          <button type="submit">Submit</button>
        </form> 
      </div>
    );
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const appUsername = "testuser1";
    const website = event.target.website.value;
    const username = event.target.username.value;
    const password = event.target.password.value;
    console.log(`Website: ${website}, Username: ${username}, Password: ${password}`);
  
    const response = await fetch('/api/passwords', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({appUsername, website: website,  websiteUsername: username, password: password })
    });
  
    if (response.ok) {
      // reload the passwords table after successful insertion
      await this.getPasswordData();
    } else {
      console.error(`Failed to insert password: ${response.status} - ${response.statusText}`);
    }
  };

  render() {
    const { loading2, passwords } = this.state;
    const { isLoggedIn } = this.props;

    let contents2;
    if (! isLoggedIn){
      contents2 = (
        <div>
          <p>Please login to access the password site.</p>
          {/* <form id="loginForm" onSubmit={this.handleSubmit}>
            Username: <input type="text" name="username" style={{ marginRight: '20px' }} required></input>
            Password: <input type="password" name="password" required></input>
            <button type="submit">Login</button>
          </form> */}
        </div>
      );
    }
    else if (loading2) {
      contents2 = <p><em>Loading...</em></p>;
    }

    else if (isLoggedIn) {
      contents2 = (
        <div>
          <p>An overview of the stored passwords.</p>
          {Passwords.renderPasswordsTable(passwords)}
        </div>
      );
    }

    return (
      <div>
        <h1 id="tabe2Label">Passwords</h1>
        {contents2}
      </div>
    );
  }

  async getPasswordData() {
    const response = await fetch('api/passwords');
    console.log(response);
    const data = await response.json();
    console.log(data);
    //console.log(Environment.GetEnvironmentVariable("MONGO_URL"));
    this.setState({ passwords: data, loading2: false });
  }
}