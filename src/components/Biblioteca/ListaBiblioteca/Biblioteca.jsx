import React, { Component } from "react";

import BibliotecaCard from "./BibliotecaCard/BibliotecaCard";
import './biblioteca.css'
export default class Biblioteca extends Component {
  render() {
    return   <div className="gallery">
    <BibliotecaCard />
    <BibliotecaCard />
    <BibliotecaCard />
    <div className="biblio-create">
    {/* <label> Crear biblioteca</label> */}
    <button class="biblio-create-button"></button>
    </div>
    </div>;
  }
}
