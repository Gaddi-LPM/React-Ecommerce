import React from 'react'
import CartWidget from '../CartWidget';
import "./style.css";

const NavBar = () => {
  return (
    <div>
        <div className='NavBar'>
         <h1>E-JACARANDA</h1>
         <a href="#inicio">Inicio</a>
         <a href="#productos">Productos</a>
         <a href="#servicios">Servicios</a>
         <a href="#nosotros">Nosotros</a>
         <a href="#contacto">Contacto</a>
         <CartWidget/>
        </div>
    </div>
  )
}

export default NavBar