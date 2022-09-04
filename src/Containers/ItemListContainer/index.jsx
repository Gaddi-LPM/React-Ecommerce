import React from 'react';
import ItemCount from '../../componets/ItemCount';
import "./style.css";

const ItemListContainer = ({greeting}) => {

  const agregarAlCarrito = (cantidad) => {
    console.log(`Se Agrego al Carrito ${cantidad} art.`);
  }
  
  return (
    <div>
      <h1>{greeting}</h1>
      <ItemCount inicial={1} stock={10} onAdd={agregarAlCarrito}/>
    </div>
  )
}

export default ItemListContainer;