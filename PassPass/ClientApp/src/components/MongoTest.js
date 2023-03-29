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
    this.state = { books: [], loading: true };
  }

  componentDidMount() {
    this.getBookData();
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

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : MongoTest.renderBooksTable(this.state.books);

    return (
      <div>
        <h1 id="tabelLabel">Books</h1>
        <p>This component demonstrates fetching book data from the server.</p>
        {contents}
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
}