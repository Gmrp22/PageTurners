
import React, { Component } from "react";
import axios from "axios";
export default class BookCard extends Component {
  constructor(props) {
    super(props);
    this.state = { books: [] };
  }
  componentDidMount() {
    axios.get('http://localhost:8080/api/book'+ '/' + this.props.book.bookId).then((res) => {
      const books = res.data;
      this.setState({ books });
      console.log(books)
    });
  }


  render() {
    return (
      <div className="book-card">
        <label className="book-data-title">Nombre de libro:</label>
        <label className="book-data">Nombre de libro</label>
        <label className="book-data-title">Nombre de autor:</label>
        <label className="book-data">Nombre de libro</label>
        <label className="book-data-title">Genero:</label>
        <label className="book-data">Nombre de libro</label>
      </div>
    );
  }
}
