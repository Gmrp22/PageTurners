import "./card.css";
import React, { Component } from "react";
import axios from "axios";

export default class Card extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = { name: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  postBiblio(e) {
    let name = this.state.name;

    axios({
      method: "post",
      url: "http://localhost:8080/api/biblioteca",
      data: {
        nombre: name,
      },
    })
      .then((v) => console.log(v))
      .catch((v) => console.log(v));
  }

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  render() {
    return (
      <form className="new-card" onSubmit={this.postBiblio}>
        <label>Escoge un nombre para la biblioteca</label>
        <input
          placeholder="Nombre de biblioteca"
          name="name"
          onChange={this.handleChange}
        />
        <button type="button" onClick={this.postBiblio}>
          Crear
        </button>
      </form>
    );
  }
}
