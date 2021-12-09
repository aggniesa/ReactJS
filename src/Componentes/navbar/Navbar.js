import React from "react";
import "./navbar.scss";

const Navbar = (props) => {
    //console.log(props);
    //console.log (props.nombre);

    const {nombre,links} = props;

    return (
        <header id="main-header" className="header">
        <>
                <img src="../logo192.png" alt="logo"/>
                <h1 className="header-h1">¡Bienvenidx, {nombre}!</h1>
            <nav>
                
                {links.map((elemento,indice)=>{
                    return <a key={elemento.name} href={elemento.href}>{elemento.name}</a>
                })} 
                <span className="material-icons">
                    shopping_cart
                </span>
            </nav>
        </>
        </header>
    );
}

export default Navbar;