import React from "react";
import "./navbar.css";

const Navbar = ( ) => {
    return (
        <header>
        <>
            <h1 className="header-h1">Tienda de productos</h1>
            <span className="material-icons">
            shopping_cart
            </span>
            <img src="../logo192.png" alt="logo"/>
            <nav>
                <ul>
                    <li><a href="#">link 1</a></li>
                    <li><a href="#">link 2</a></li>
                
                </ul>
            </nav>
        </>
        </header>
    );
}

export default Navbar;