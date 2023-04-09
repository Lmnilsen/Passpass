import React, { Component } from 'react';

function validateForm() {
  //if(document.forms["myForm"]["fname"].value === undefined){
    //return
  //}
  //var x = document.elements("password").value;
  //console.log(x)
}

export class MongoTest extends Component {
  static displayName = MongoTest.name;
  
  constructor(props) {
    super(props);
    this.state = { books: [], passwords: [], loading: true, loading2: true };
  }

  componentDidMount() {
    this.getBookData();
    this.getPasswordData();
  }

  static renderBooksTable(books) {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book =>
            <tr key={book.id}>
              <td>{book.Name}</td>
              <td>{book.price}</td>
              <td>{book.category}</td>
              <td>{book.author}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  static renderPasswordsTable(passwords) {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabe2">
        <thead>
          <tr>
            <tr>App User</tr>
            <th>Username</th>
            <th>Website</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {passwords.map(password =>
            <tr key={password.id}>
              <td>{password.appUsername}</td>
              <td>{password.websiteUsername}</td>
              <td>{password.website}</td>
              <td>{password.password}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : MongoTest.renderBooksTable(this.state.books);

    let contents2 = this.state.loading2
      ? <p><em>Loading...</em></p>
      : MongoTest.renderPasswordsTable(this.state.passwords);  

    return (
      <div>
        <h1 id="tabelLabel">Books</h1>
        <p>This component demonstrates fetching book data from the server.</p>
        {contents}
        <h1 id="tabe2Label">Passwords</h1>
        <p>This component demonstrates a mockup of the password table.</p>
        {contents2}
        <form action={validateForm()} id="myForm">
  Password: <input type="text" name="password" required></input>
  <input type="submit" value="Submit" ></input>
  </form>
          
      </div>
       
    );
  }

  async getBookData() {
    const response = await fetch('api/books');
    console.log(response);
    const data = await response.json();
    console.log(data);
    //console.log(Environment.GetEnvironmentVariable("MONGO_URL"));
    this.setState({ books: data, loading: false });
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
