import './card.css'
export default function Card(props) {
  return (
    <div className="new-card" >
      <label >Escoge un nombre para la biblioteca</label>
    <input placeholder="Nombre de biblioteca" />
    <button>Crear</button>
    </div>
  );
}
