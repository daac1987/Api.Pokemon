import perfil from '../img/pokebola.png';
import '../estilos.css';
import { Link } from 'react-router-dom';

export default function Navegador() {

    return (
        <>


                <div className="mt-2">
                    <Link class="btn btn-link text-white text-decoration-none btnInfo" id='colorletra' to={"/"} >Buscador</Link>
                </div>

                <div className="mt-2">
                    <Link class="btn btn-link text-white text-decoration-none btnInfo" to={"/imagenes"}>Imàgenes</Link>
                </div>

                <div className="mt-2">
                    <Link className="btn text-white text-decoration-none" to={"/"} ><img src={perfil} className="img-perfil" alt="imagen"></img> </Link>
                </div>

        </>
    )
}