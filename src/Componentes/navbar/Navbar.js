import React from "react";
import "./navbar.scss";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget.js";

function Navbar ({nombre, links}) {

    return (
        <header id="main-header" className="header">
            <NavLink to="/">
                <div className="brand">
                <img src="../logo-2.jpg" alt="logo"/>
                <h1>{nombre}</h1>
                </div>
            </NavLink>
            <nav>
                {links.map((elemento,indice)=>{
                    return <Link key={elemento.name} to={elemento.href}>{elemento.name}</Link>
                })}
                <NavLink to="/cart">
                    <CartWidget /> 
                    <span className="material-icons">
                        shopping_cart
                    </span>
                </NavLink>
            </nav>
        
        </header>
    );
}

export default Navbar;