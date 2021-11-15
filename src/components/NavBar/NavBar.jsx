import "./style.css";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <div className="navbarM">
      <Link to="Home">Inicio</Link>
      <Link to="Gallery">Libros</Link>
      <Link to="Biblioteca">Biblioteca</Link>
    </div>
  );
}

// TODO CAMBIAR COLOR DE LINKS