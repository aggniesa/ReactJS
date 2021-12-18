const Item = ({item}) => {

    return (
        <article className="card">
            <h3>{item.nombre}</h3>
            <p>Precio: ${item.precio}</p>
            <button>Ver detalle</button>
        </article>
    )
}

export default Item
