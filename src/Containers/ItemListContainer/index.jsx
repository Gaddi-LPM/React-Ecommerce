import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ItemList from '../../componets/ItemList';
import { useParams } from 'react-router-dom';
//import { products } from '../../data/products';
//import ItemCount from '../../componets/ItemCount';
import "./style.css";

const ItemListContainer = ({greeting}) => {
  
  const [producto , setProducto] = useState([])
  const {categoryId} = useParams();

  useEffect(()=>{

    (async () => {

      // const promesa = new Promise((resolve, reject) => {
      //   setTimeout(() => {
      //     resolve(products);
      //   }, 3000);
      // });
    
      try {
        if(categoryId){
          const resultado = await fetch(`https://fakestoreapi.com/products/category/${categoryId}`);
          const productos = await resultado.json();
          setProducto(productos)
          //console.log(productos)
        }
        else{
          const resultado = await fetch(`https://fakestoreapi.com/products`);
          const productos = await resultado.json();
          setProducto(productos)
          //console.log(productos)
        }
        
      } catch (error) {
        console.log(error);
      }
    })();
  
}, [categoryId])

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