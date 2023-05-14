import perfil from '../img/pokebola.png';
import category from '../img/category.png';
import '../estilos.css';
import { Link } from 'react-router-dom';

export default function Navegador() {

    let ventana = false;

    function visibleFormato(e) {

        let estado = null;
   
        if (ventana === true) {
            estado = document.getElementById("format").style.display = ("block");
            ventana = false;
        }
        else {
            estado = document.getElementById("format").style.display = ("none");
            ventana = true;
        }
        return estado
    }

    return (
        <>

                <div className="mt-2">
                    <Link className="btn btn-link text-white text-decoration-none btnInfo" to={"/"} >Buscador</Link>
                </div>

                <div className="mt-2">
                    <Link className="btn btn-link text-white text-decoration-none btnInfo" to={"/imagenes"}>Imàgenes</Link>
                </div>

                <div className="mt-2">
                    <button type="button" className="btn btn-link text-white text-decoration-none boton" onClick={visibleFormato}><img src={category} alt="imagen"></img></button>
                </div>

                <div className="mt-2">
                    <Link className="btn text-white text-decoration-none" to={"/imagenes"} ><img src={perfil} className="img-perfil" alt="imagen"></img> </Link>
                </div>

        </>
    )
}