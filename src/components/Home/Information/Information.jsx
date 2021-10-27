import "./information.css";
export default function Information() {
  return (
    <div className="info">
      <div className="info-element">
        <h2>Descubre</h2>
        <img src="src\img\Home\1.png" alt="--" />
        <span>Encuentra nuevos libros</span>
      </div>
      <div className="info-element">
        <h2>Busca</h2>
        <img src="src\img\Home\2.png" alt="--" />
        <span>Busca tus libros favoritos</span>
      </div>
      <div className="info-element">
        <h2>Agrega</h2>
        <img src="src\img\Home\3.png" alt="--" />
        <span>Agrega libros a bibliotecas</span>
      </div>
    </div>
  );
}
