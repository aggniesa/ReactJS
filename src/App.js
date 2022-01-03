import React from 'react';
import './app.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom"


//Componentes
import Navbar from './Componentes/navbar/Navbar';
import ItemListContainer from './Componentes/ItemListContainer';
import ItemDetailContainer from './Componentes/ItemDetailContainer';
import Footer from './Componentes/Footer';
import Cart from './Componentes/Cart';

function App () {


  const links= [
    {href:"/products", name:"Products"},
    {href:"/category/la_Roche", name:"La Roche Posay", id:"La Roche Posay"},
    {href:"/category/the_Ordinary", name:"The Ordinary", id:"The Ordinary"},

  ]

  return (
  
    <BrowserRouter>
      <Navbar nombre={"E-Commerce"} links={links}/>
      <main>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={"Bienvenidx"} nombreUsuario={"Inés"} apellido={"Mena"}/>}/>
          <Route path="/products" element={<ItemListContainer greeting={"Bienvenidx"} nombreUsuario={"Inés"} apellido={"Mena"}/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/category/:id" element={<ItemListContainer greeting={"Bienvenidx"} nombreUsuario={"Inés"} apellido={"Mena"}/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer/>}/>
        </Routes>
        </main>
      <Footer/>
    </BrowserRouter>
  
  );
}

export default App;
