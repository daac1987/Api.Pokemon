import { Link } from "react-router-dom";


export default function SubMenu(props) {

    
    return (
        <>

            <div>
                <Link class="btn btn-link text-white text-decoration-none boton" to={props.linck} target="blanck"><img src={props.img} className="img-perfil" alt="imagen"></img> <figcaption>{props.nombre}</figcaption> </Link>
            </div>

        </>
    )
}