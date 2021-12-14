import { useState } from 'react';

function ItemCount ({stock, initial, onAdd}) {
    //desarrollar lógica para que el contador nunca supere el stock
    const [contador, setContador] = useState (0);
    console.log ();

    const sumar = () => {
        //if contador > stock; etc etc.
        setContador(contador + 1);

        //else alert(no se puede)
        //onAdd es una función a crear en ItemListContainer
        //pasar parámetro a onAdd
      }
      const restar = () => {
        setContador(contador - 1);
      }
      const reset = () => {
        setContador(0);
      }
    return (
        <>
        <p> Contador actual : {contador}</p>
          <button onClick={sumar}>sumar</button>
          <button onClick={restar}>restar</button>
          <button onClick={reset}>resetear</button>
        </>
    )
}

export default ItemCount