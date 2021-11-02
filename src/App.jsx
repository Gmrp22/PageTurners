
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Gallery from "./components/Descubre/Gallery";
import Biblioteca from "./components/Biblioteca/ListaBiblioteca/Biblioteca";
import BooksBiblioList from "./components/Biblioteca/BooksBiblioList/BooksList";
import CrearBiblio from "./components/Biblioteca/CrearBiblioteca/CrearBiblio";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";
function App() {
  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/" component={Home} />
        <React.Fragment>
          <NavBar />
          <Route exact path="/Gallery" component={Gallery} />
          <Route exact path="/Biblioteca" component={Biblioteca} />
          <Route exact path="/Libros-Biblioteca" component={BooksBiblioList} />
          <Route exact path="/Crear-Biblioteca" component={CrearBiblio} />
          </React.Fragment>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

