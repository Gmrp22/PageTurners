import React, { Component } from "react";
import axios from "axios";
import BookCard from "./BooksBiblioteca/LibrosDeBiblioteca/BookCard";

export default class BooksBiblioList extends Component {
  constructor(props) {
    super(props);
    this.state = { biblio_book: [] };
  }
  componentDidMount() {
    axios.get(`http://localhost:8080/api/managebiblioteca`).then((res) => {
      const biblio_book = res.data;
      this.setState({ biblio_book });
    });
  }

  render() {
    return (
      <div className="gallery">
        {this.state.biblio_book.map((b) => (
          <BookCard book={b} key={b.id} />
        ))}
      </div>
    );
  }
}
