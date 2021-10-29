import React, { Component } from "react";

import BibliotecaCard from "./BibliotecaCard/BibliotecaCard";

export default class Biblioteca extends Component {
  render() {
    return   <div className="gallery">
    <BibliotecaCard />
    <BibliotecaCard />
    <BibliotecaCard />
    
    </div>;
  }
}
