import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Gallery from "./components/Descubre/Gallery";
import Biblioteca from "./components/Biblioteca/ListaBiblioteca/Biblioteca";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
    <NavBar />
    <Biblioteca /></div>
  );
}

export default App;
{/* <div>
<NavBar />
<Gallery />
</div> */}