import { useFetch } from "../Hooks/useFetch";
import '../estilos.css';

export default function Imagenes() {

    let url = "https://pokeapi.co/api/v2/pokemon/?limit=255?limit=255";

    const data = useFetch(url);
    const lista = Object.values(data);
 
    return (
        <>

            <div className="container-fluid row contenedor-Img">
                <h2 className="text-white fw-light mt-5">Lista de {lista.length} Pokemones</h2>
                {lista.map((el, index) => {
                    return <div className='h4 pb-2 mb-4 text-danger container-fluid rounded-bottom mostrar col-lg-4 col-sm-6 text-center imagen-cont' key={index}>
                        <img className="imagen-anim" src={el.sprites.other.dream_world.front_default} alt={el.name} />
                        <figcaption className='text-uppercase fst-italic'>{el.name}</figcaption>
                        <h5>Tipo : {el.types[0].type.name}</h5>
                    </div>
                })}
          
            </div>
        </>
    )
}