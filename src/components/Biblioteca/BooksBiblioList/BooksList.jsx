import React, { Component } from "react";

import BookCard from "./BooksBiblioteca/LibrosDeBiblioteca/BookCard";

export default class BooksBiblioList extends Component {
  render() {
    return   <div className="gallery">
    <BookCard />
    <BookCard />
    </div>;
  }
}
