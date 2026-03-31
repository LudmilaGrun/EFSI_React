import Formulario from "./Formulario";
import Listado from "./Listado";

function Layout({ citas }) {
  return (
    <div className="container">
      <div className="row">
        
        <div className="one-half column">
          <Formulario />
        </div>

        <div className="one-half column">
          <Listado citas={citas} />
        </div>

      </div>
    </div>
  );
}

export default Layout;

