import React from 'react';
import './app.scss';


//Componentes
import Navbar from './Componentes/navbar/Navbar';
import ItemListContainer from './Componentes/ItemListContainer';
import ItemDetailContainer from './Componentes/ItemDetailContainer';

function App () {


  const links= [
    {href:"#", name:"Inicio"},
    {href:"#", name:"Productos"},
    {href:"#", name:"Carrito"},

  ]

  return (
    <>
      <Navbar nombre={"E-Commerce"} links={links}/>
      <ItemListContainer greeting={"Bienvenidx"} nombreUsuario={"Inés"} apellido={"Mena"}/>
      <ItemDetailContainer/>
      <main>Main</main>
      
    </>
  );
}

export default App;
