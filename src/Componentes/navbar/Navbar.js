import React from "react";
import "./navbar.scss";
import CartWidget from "../CartWidget.js"

function Navbar ({nombre, links}) {

    return (
        <header id="main-header" className="header">
        
                <img src="../logo192.png" alt="logo"/>
                <h1>{nombre}</h1>
            <nav>
                {links.map((elemento,indice)=>{
                    return <a key={elemento.name} href={elemento.href}>{elemento.name}</a>
                })}
                <CartWidget /> 
                <span className="material-icons">
                    shopping_cart
                </span>
            </nav>
        
        </header>
    );
}

export default Navbar;