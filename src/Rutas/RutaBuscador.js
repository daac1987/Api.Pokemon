import Navegador from "../Componentes/NavegadorUno";
import '../estilos.css';
import 'bootstrap/dist/css/bootstrap.css';
import Ventana from "../Componentes/Ventana";
import Buscador from "../Componentes/Buscador";

export default function RutaBuscador() {

    return (
        <>

        <div className="contenedorPrincipalOscuro" id="contenedorPrincipalOscuro"> 
            <div className="d-flex justify-content-end">
                <Navegador />
            </div>

            <div className="text-center">
                <Buscador />
            </div>

            <div className="d-flex justify-content-end">
                <Ventana />
            </div>
        </div>
        </>
    )
}