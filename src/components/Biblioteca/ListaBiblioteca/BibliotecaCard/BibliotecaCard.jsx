import './biblio-card.css'
export default function BibliotecaCard(props) {
  return (
    <div className="book-biblio-card">
      <label className="book-data-title">Nombre de biblioteca:</label>
      <label className="book-data">{props.book.nombre}</label>
      <label className="book-data-title">Cantidad de libros:</label>
      <label className="book-data">100</label> //TODO para calcular cant
    </div>
  );
}
