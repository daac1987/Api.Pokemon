import lupa from '../img/lupa.png';
import microfono from '../img/microfono.png';
import logoGoogle from '../img/logoGoogle.png';
import '../estilos.css';
import ResultadoBuscador from './ResultadoBuscador';
import { useState } from 'react';
import SubMenu from "./SubMenu";
import gmail from "../img/gmail.png";
import youtube from "../img/youtube.png";
import agregar from "../img/perfil.jpg";
import cromo from "../img/pokemon-go.png";
import { Suspense } from 'react';


export default function Buscador() {

    const [nombre, setNombre] = useState('ditto');

    const HandleKeyDown = (event) => {

        if (event.key === 'Enter') {
            let entrada = document.getElementById("entrada").value;
            if (entrada === "") {
                alert("No Ingreso el nombre del Pokemon");
            }
            else {
                setNombre(entrada.trim().toLowerCase());
                document.getElementById("entrada").value = "";
            }
        }
        return (nombre);
    };

    return (
        <>
            <div className="container-fluid text-center">

                <div className="contendor-central position-absolute top-50 start-50 translate-middle">

                    <div className='mb-5'>
                        <img src={logoGoogle} className="img-fluid bg-transparent" alt="imagen" ></img>
                    </div>

                    <div class="input-group mb-3 align-items-center">
                        <span class="input-group-text bg-white barraBuscadorDer"><img src={lupa} className="img-fluid" alt="imagen" ></img></span>
                        <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" placeholder='Busca en Google o escribe una URL' id='entrada' onKeyDown={HandleKeyDown}></input>
                        <span class="input-group-text bg-white barraBuscadorIzq"><img src={microfono} className="img-fluid" alt="imagen" ></img></span>
                    </div>

                    <div className="d-flex justify-content-center">

                        <SubMenu img={cromo} linck="https://pokeapi.co/" nombre='PokeApi' />
                        <SubMenu img={youtube} linck="https://www.youtube.com/watch?v=Rsv2VkoIpk0" nombre='Youtuve' />
                        <SubMenu img={gmail} linck="https://www.google.com/intl/es/gmail/about/" nombre='Gmail' />
                        <SubMenu img={agregar} linck="https://curriculum-david-acuna-cordero.web.app" nombre='Potafolio' />

                    </div>

                    <div>
                        <ResultadoBuscador pokemonId={nombre}></ResultadoBuscador>
                    </div>

                </div>

            </div>
        </>
    )
}