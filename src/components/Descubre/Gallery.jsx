import React, { Component } from "react";
import Book from "./Book/Book";
import axios from "axios";
import "./gallery.css";
export default class Gallery extends Component {
  test() {
    console.log("-.-");
  }
  constructor(props) {
    super(props);
    this.state = { books: [] };
  }
  componentDidMount() {
    axios.get(` http://localhost:8080/api/book`).then((res) => {
      const books = res.data;
      this.setState({ books });
    });
  }

  render() {
    return (
      <div className="gallery">
        {this.state.books.map((b) => (
          <Book book={b} key={b.id} />
        ))}
      </div>
    );
  }
}
