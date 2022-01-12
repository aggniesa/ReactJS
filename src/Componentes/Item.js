import { Link } from 'react-router-dom';


export function Item ( {item} ) {
    return (
        <div className="card">
            <img src=" " alt=" "></img>
            <div>
                <h3>{item.nombre}</h3>
                <p>Precio: ${item.price}</p>
                <Link to={`/item/${item.id}`}><button>Ver detalle</button></Link>
            </div>
        </div>
    );
}

export default Item
