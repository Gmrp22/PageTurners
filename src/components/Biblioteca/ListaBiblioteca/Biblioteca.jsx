import React, { Component } from "react";
import axios from "axios";
import BibliotecaCard from "./BibliotecaCard/BibliotecaCard";
import "./biblioteca.css";
export default class Biblioteca extends Component {
  constructor(props) {
    super(props);
    this.state = { biblios: [] };
  }
  componentDidMount() {
    axios.get(` http://localhost:8080/api/biblioteca`).then((res) => {
      const biblios = res.data;
      this.setState({ biblios });
    });
  }
  
  render() {
    return (
      <div className="gallery">
        {this.state.biblios.map((b) => (
          <BibliotecaCard book={b} key={b.id} />
        ))}
//TODO IR A PAGINA DE LIBROS DE BILIO
        <div className="biblio-create">
          <button
            className="biblio-create-button"
            onClick={(event) => (window.location.href = "/Crear-Biblioteca")}
          ></button>
        </div>
      </div>
    );
  }
}
