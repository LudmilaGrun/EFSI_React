import "./BotonEliminar.css"

function BotonEliminar({ onClick }) {
  return (
    <button onClick={onClick} className="button elimnar u-full-width">Eliminar ×</button>
  );
}

export default BotonEliminar;

