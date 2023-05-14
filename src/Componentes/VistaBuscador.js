import '../estilos.css';
import 'bootstrap/dist/css/bootstrap.css';
import Buscador from "./Buscador";
import SubMenu from "./SubMenu";
import gmail from "../img/gmail.png";
import youtube from "../img/youtube.png";
import agregar from "../img/perfil.jpg";
import cromo from "../img/pokemon-go.png";


export default function VistaBuscador() {

    return (

        <>

            <div className="container-fluid text-center border border-light ">
                
                <div className="contendor-central position-absolute top-50 start-50 translate-middle">
                    <Buscador />
                    <div className="d-flex justify-content-center">

                        <SubMenu img={cromo} linck="https://pokeapi.co/" nombre='PokeApi'/>
                        <SubMenu img={youtube} linck="https://www.youtube.com/watch?v=Rsv2VkoIpk0" nombre='Youtuve' />
                        <SubMenu img={gmail} linck="https://www.google.com/intl/es/gmail/about/" nombre='Gmail' />
                        <SubMenu img={agregar} linck="https://curriculum-david-acuna-cordero.web.app" nombre='Potafolio' />

                    </div>


                </div>

            </div>

        </>
    )

}