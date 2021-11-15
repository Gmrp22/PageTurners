import './biblio-card.css'
export default function BibliotecaCard(props) {
  return (
    <div className="book-biblio-card" onClick={(event) => (window.location.href = "/Libros-Biblioteca")}> 
      <label className="book-data-title">Nombre de biblioteca:</label>
      <label className="book-data">{props.book.nombre}</label>
      <label className="book-data-title">Cantidad de libros:</label>
      <label className="book-data">100</label> 
    </div>
  );
}
