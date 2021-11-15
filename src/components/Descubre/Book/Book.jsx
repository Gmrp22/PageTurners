import "./book.css";
export default function Book(props) {
  return (
    <div className="book-card">
      <label className="book-data-title">Nombre de libro:</label>
      <label className="book-data">{props.book.nombre}</label>
      <label className="book-data-title">Nombre de autor:</label>
      <label className="book-data">{props.book.autors.nombre}</label>
      <label className="book-data-title">Genero:</label>
      <label className="book-data">{props.book.generos.nombre}</label>
    </div>
  );
}
