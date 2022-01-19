import React from 'react';
import './app.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom"


//Componentes
import Navbar from './Componentes/navbar/Navbar';
import ItemListContainer from './Componentes/ItemListContainer';
import ItemDetailContainer from './Componentes/ItemDetailContainer';
import Footer from './Componentes/Footer';
import Cart from './Componentes/Cart';
import CustomProvider, { Provider } from './Componentes/context'

function App () {

  const links= [
    {href:"/products", name:"Products"},
    {href:"/category/1", name:"La Roche Posay", id:"La Roche Posay"},
    {href:"/category/2", name:"The Ordinary", id:"The Ordinary"},

  ]

  return (
    <CustomProvider>
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
    </CustomProvider>
  
  );
}

export default App;
