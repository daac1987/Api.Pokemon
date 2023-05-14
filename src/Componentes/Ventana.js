import React from 'react';
import { useFetch } from "../Hooks/useFetch";

export default function Ventana(){

    let url = "https://pokeapi.co/api/v2/pokemon/?limit=250?limit=250";

    const data = useFetch(url);
    const lista = Object.values(data);

    return (
        <>
            <div id='format' className='text-center'>
      
                {lista.map((el, index) => {
                    return <div className='h4 pb-2 mb-4 text-danger border-bottom border-danger container-fluid rounded-bottom' key={index}> <img src={el.sprites.front_default} alt={el.name}/> <figcaption className='text-uppercase fst-italic'>{el.name}</figcaption> 
                    </div>
                })}

            </div>


        </>
    )
}
