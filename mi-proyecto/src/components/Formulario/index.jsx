import { useState } from "react";
import BotonCita from "../BotonCita";
import CampoInput from "../CampoInput";
import "./Formulario.css"

function Formulario({ onAgregarCita }) {
  const [mascota, setMascota] = useState("");
  const [dueno, setDueno] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [sintomas, setSintomas] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const nueva = {
      id: Date.now(),
      mascota,
      "dueño": dueno,
      fecha,
      hora,
      sintomas,
    };
    if (onAgregarCita) onAgregarCita(nueva);
    setMascota("");
    setDueno("");
    setFecha("");
    setHora("");
    setSintomas("");
  };

  return (
    <>
      <h2>Crear mi Cita</h2>

      <form onSubmit={handleSubmit}>
        <CampoInput label="Nombre Mascota" type="text" name="mascota" placeholder="Nombre Mascota" value={mascota} onChange={(e) => setMascota(e.target.value)} />
        <CampoInput label="Nombre Dueño" type="text" name="dueno" placeholder="Nombre dueño de la mascota" value={dueno} onChange={(e) => setDueno(e.target.value)} />
        <CampoInput label="Fecha" type="date" name="fecha" value={fecha} onChange={(e) => setFecha(e.target.value)} />
        <CampoInput label="Hora" type="time" name="hora" value={hora} onChange={(e) => setHora(e.target.value)} />

      <label>Sintomas</label><textarea name="sintomas" class="u-full-width" value={sintomas} onChange={(e) => setSintomas(e.target.value)}></textarea>

        <BotonCita/>
      </form>
    </>
  );
}

export default Formulario;
