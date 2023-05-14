import { useFetchBuscador } from "../Hooks/useFechBuscador";

export default function ResultadoBuscador(nombre) {

    let data = useFetchBuscador(nombre);

    console.log(nombre.pokemonId + ' en resultado');

    return (
        <>
            <div className="container-fluid row contenedor-Img">
                {/*<h1>{data.name}</h1>*/}
                {/*img src={data.sprites.other.dream_world.front_default} alt={data.name} />*/}
                {/*<h5>Tipo : {data.types[0].type.name}</h5>*/}
                {/*<img src={data.sprites.front_default} alt={data.name} />*/}
            </div>

        </>
    )

}