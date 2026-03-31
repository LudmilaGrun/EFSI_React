import Cita from "./Cita";

function Listado({ citas }) {
  return (
    <>
      <h2>Administra tus citas</h2>

      {citas.map((cita) => (
        <Cita key={cita.id} cita={cita} />
      ))}
    </>
  );
}

export default Listado;
