import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Gallery from "./components/Descubre/Gallery";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <NavBar />
      <Gallery />
    </div>
  );
}

export default App;
