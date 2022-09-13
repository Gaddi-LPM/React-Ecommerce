import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ItemList from '../../componets/ItemList';
//import { products } from '../../data/products';
//import ItemCount from '../../componets/ItemCount';
import "./style.css";

const ItemListContainer = ({greeting}) => {
  
  const [producto , setProducto] = useState([])

  useEffect(()=>{

    (async () => {

      // const promesa = new Promise((resolve, reject) => {
      //   setTimeout(() => {
      //     resolve(products);
      //   }, 3000);
      // });
    
      try {
        const resultado = await fetch('https://fakestoreapi.com/products');
        const productos = await resultado.json();
        setProducto(productos)
        console.log(productos)

      } catch (error) {
        console.log(error);
      }
    })();
  
}, [])

  /*
  const agregarAlCarrito = (cantidad) => {
    console.log(`Se Agrego al Carrito ${cantidad} art.`);
  }
  */
  
  return (
    <div>
      <h1>{greeting}</h1>
      {/* <ItemCount inicial={1} stock={10} onAdd={agregarAlCarrito}/> */}
        <ItemList products={producto}/>
    </div>
  )
}

export default ItemListContainer;