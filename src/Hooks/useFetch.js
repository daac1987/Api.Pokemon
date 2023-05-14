import { useState, useEffect } from 'react';

export const useFetch = (url) => {

    const [data, setData] = useState([]);
    const [estado, setEstado] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const getData = async (url) => {
            try {
                let resultado = await fetch(url);

                if (!resultado.ok) {
                    throw {
                        e: true,
                        status: resultado.status,
                        statusText: !resultado.status ? "Ocurrio un error" : resultado.statusText
                    }
                }

                const data = await resultado.json();

                const promesa = data.results.map(async(variable)=>{
                    const res = await fetch(variable.url);
                    const data = await res.json();
                    return data;
                })

                const DataResultado = await Promise.all(promesa);

                setEstado(false);
                setData(DataResultado);
                setError({ e: false })

            } catch (e) {
                setEstado(true);
                setError({ e: true })
            }

        }

        getData(url);
    }, [url]);

    //devuelvo las tres constantes

    return (data)

};


