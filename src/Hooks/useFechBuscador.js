import { useState, useEffect } from 'react';

export const useFetchBuscador = (nombre) => {

    const [data, setData] = useState([]);
    const [estado, setEstado] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const getData = async (nombre) => {
            try {
                const url = `https://pokeapi.co/api/v2/pokemon/${nombre.pokemonId}/`;

                console.log(url+' en usef' + nombre.pokemonId);

                let resultado = await fetch(url);

                if (!resultado.ok) {
                    throw {
                        e: true,
                        status: resultado.status,
                        statusText: !resultado.status ? "Ocurrio un error" : resultado.statusText
                    }
                }

                
                const pok = await resultado.json();

                setEstado(false);
                setData(pok);
                setError({ e: false })

            } catch (e) {
                setEstado(true);
                setError({ e: true })
            }

        }

        getData(nombre,error);
    }, [nombre]);

    //devuelvo las tres constantes

    return (data)

};