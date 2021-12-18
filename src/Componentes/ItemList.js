import Item from './Item';

function ItemList ({lista}) {
    
    return (
        
        
        <div className="cardContainer">
            {lista.map((products)=> {
                return <Item key={products.id} item={products}/>
            })}
        </div>
      
    )              
}

export default ItemList
