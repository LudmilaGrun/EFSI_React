import { useState } from "react";
import Titulo from "./components/Titulo";
import Layout from "./components/Layout";

function App() {
  const [citas, setCitas] = useState([
    {
      id: 1,
      mascota: "Nina",
      dueño: "Martin",
      fecha: "2021-08-05",
      hora: "08:20",
      sintomas: "Le duele la pierna"
    },
    {
      id: 2,
      mascota: "Sifon",
      dueño: "Flecha",
      fecha: "2023-08-05",
      hora: "09:24",
      sintomas: "Duerme mucho"
    },
    {
      id: 3,
      mascota: "Floki",
      dueño: "Ari",
      fecha: "2023-08-05",
      hora: "16:15",
      sintomas: "No está comiendo"
    }
  ]);

  const agregarCita = (cita) => {
    setCitas((prev) => [...prev, cita]);
  };

  const eliminarCita = (id) => {
    setCitas((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <>
      <Titulo />
      <Layout citas={citas} onAgregarCita={agregarCita} onEliminarCita={eliminarCita} />
    </>
  );
}

export default App;
