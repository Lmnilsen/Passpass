import React, { Component } from 'react';

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
              <td>{book.Price}</td>
              <td>{book.Category}</td>
              <td>{book.Author}</td>
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
        <h1 id="tabelLabel" >Books</h1>
        <p>This component demonstrates fetching book data from the server.</p>
        {contents}
      </div>
    );
  }

  async getBookData() {
    const response = await fetch('api/books');
    const data = await response.json();
    this.setState({ books: data, loading: false });
  }
}
