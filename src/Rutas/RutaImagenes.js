import Navegador from "../Componentes/NavegadorDos";
import '../estilos.css';
import 'bootstrap/dist/css/bootstrap.css';
import Ventana from "../Componentes/Ventana";
import Imagenes from "../Componentes/Imagenes"


export default function RutaImagenes() {
    return (
        <>
            <div className="contenedorPrincipalOscuroDos">
                <div className="d-flex justify-content-end mb-5 mantener-nav">
                    <Navegador />
                </div>

                <div className="text-center">
                    <Imagenes />
                </div>
            </div>
        </>
    )
}