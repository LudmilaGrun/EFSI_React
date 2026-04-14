import Formulario from "../Formulario";
import Listado from "../Listado";
import "./Layout.css"

function Layout({ citas, onAgregarCita, onEliminarCita }) {
  return (
    <div class ="container">
      <div class ="row">
        
        <div class ="one-half column">
          <Formulario onAgregarCita={onAgregarCita} />
        </div>

        <div class="one-half column">
          <Listado citas={citas} onEliminarCita={onEliminarCita} />
        </div>

      </div>
    </div>
  );
}

export default Layout;

