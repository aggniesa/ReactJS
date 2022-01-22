import { useState } from 'react';

function ItemCount ({stock, initial, onAdd}) {
    
  let [counter, setCounter] = useState (initial);


    const sumar = () => {
        if (counter < stock){
          setCounter(counter + 1);
        }
      }

      const restar = () => {
        if (counter > initial) {
          setCounter(counter - 1);
        }
      }

      const addItem = () => {
        console.log ("Agregar items")
        setCounter(initial)
        onAdd (counter);
      }
     
    return (

        <div className="counter">
          
          <p> Productos: {counter}</p>
          <button onClick={restar}>-</button>
          <button onClick={() => onAdd(counter)}>Agregar</button>
          <button onClick={sumar}>+</button>
          
        </div>
        
    )
}

export default ItemCount