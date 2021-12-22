
const Item = ({item}) => {

    return (
        <article className="card">
            <h3>{item.nombre}</h3>
            <p>Precio: ${item.price}</p>
            <button>Ver detalle</button>
        </article>
    )
}

export default Item
