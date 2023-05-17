import { useFetchBuscador } from "../Hooks/useFechBuscador";
import '../estilos.css';

export default function ResultadoBuscador(nombre) {

    const data = useFetchBuscador(nombre);


    console.log(nombre.pokemonId + ' en resultado' + data);

    return (
        <>
            {data.length === 0 ? <>Cargando.... </> : <div className="container-fluid">

                <h1 className="text-white text-uppercase fst-italic">{data.name}</h1>

                <div className="d-flex justify-content-evenly mt-3">

                    <div>
                        <img className="img-buscador p-2" src={data.sprites.other.dream_world.front_default} alt={data.name} />
                    </div>

                    <div className="text-white mt-5">
                        <h5>Tipo : {data.types[0].type.name}</h5>
                        <h5>Experiencia: {data.base_experience}</h5>
                        <h5>hp: {data.stats[0].base_stat}</h5>
                        <h5>Ataque: {data.stats[1].base_stat}</h5>
                        <h5>Defensa: {data.stats[2].base_stat}</h5>
                        <h5>Especial: {data.stats[3].base_stat}</h5>
                        <h5>Habilidad: {data.abilities[0].ability.name}</h5>
                        <h5>Movimiento: {data.moves[0].move.name}</h5>
                        <h5>Peso : {data.weight}</h5>
                    </div>
                </div>

            </div>
            }
        </>
    )

}