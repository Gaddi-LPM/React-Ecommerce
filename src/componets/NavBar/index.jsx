import React from 'react'
import CartWidget from '../CartWidget';
import { Link } from 'react-router-dom';
import "./style.css";

const NavBar = () => {
  return (
    <div>
        <div className='NavBar'>
         <h1>E-JACARANDA</h1>
         <Link to ="/">Home</Link>
         <Link to ="/category/men's clothing">Men</Link>
         <Link to ="/category/women's clothing">Women</Link>
         <Link to ="/category/electronics">Electronics</Link>
         <Link to ="/category/jewelery">Jewelery</Link>
         <CartWidget/>
        </div>
    </div>
  )
}

export default NavBar