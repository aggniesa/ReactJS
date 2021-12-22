import { useState } from 'react';

function ItemCount ({stock, initial, onAdd}) {
    
  const [contador, setContador] = useState (initial);

    const sumar = () => {
        if (contador < stock){
          setContador(contador + 1);
        }
      }

      const restar = () => {
        if (contador > initial) {
          setContador(contador - 1);
        }
      }
     
    return (

        <div className="contador">
          
          <p> Productos: {contador}</p>
          <button onClick={restar}>-</button>
          <button onClick={() => onAdd(contador)}>Agregar</button>
          <button onClick={sumar}>+</button>
          
        </div>
        
    )
}

export default ItemCount