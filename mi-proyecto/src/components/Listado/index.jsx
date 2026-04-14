import Cita from "../Cita";
import "./Listado.css"

function Listado({ citas, onEliminarCita }) {
  return (
    <>
      <h2>Administra tus citas</h2>

      {citas.map((cita) => (
        <Cita key={cita.id} cita={cita} onEliminarCita={onEliminarCita} />
      ))}
    </>
  );
}

export default Listado;
