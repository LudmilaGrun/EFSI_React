import BotonEliminar from "../BotonEliminar";
import "./Cita.css"

function Cita({ cita, onEliminarCita }) {
  const handleEliminar = () => {
    if (window.confirm("¿Eliminar esta cita?")) {
      if (onEliminarCita) onEliminarCita(cita.id);
    }
  };

  return (
    <div class="cita">
      <p>Mascota: <span>{cita.mascota}</span></p>
      <p>Dueño: <span>{cita.dueño}</span></p>
      <p>Fecha: <span>{cita.fecha}</span></p>
      <p>Hora: <span>{cita.hora}</span></p>
      <p>Sintomas: <span>{cita.sintomas}</span></p>

      <BotonEliminar onClick={handleEliminar} />
    </div>
  );
}

export default Cita;





