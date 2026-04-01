import CampoInput from "./CampoInput";

function Formulario() {
  return (
    <>
      <h2>Crear mi Cita</h2>

      <form>
        <CampoInput label="Nombre Mascota" type="text" placeholder="Nombre Mascota" />
        <CampoInput label="Nombre Dueño" type="text" placeholder="Nombre dueño de la mascota" />
        <CampoInput label="Fecha" type="date" />
        <CampoInput label="Hora" type="time" />

        <p>Sintomas</p>
        <textarea class ="u-full-width"></textarea>

        <button type="submit" class ="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </>
  );
}

export default Formulario;
