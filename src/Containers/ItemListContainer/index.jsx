import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ItemList from '../../componets/ItemList';
import { useParams } from 'react-router-dom';
import Loader from '../../componets/Loader';
import "./style.css";

const ItemListContainer = () => {
  
  const [producto , setProducto] = useState([])
  const [loading , setLoading] = useState(true);
  const {categoryId} = useParams();

  useEffect(()=>{

    (async () => {

      try {
        if(categoryId){
          const resultado = await fetch(`https://fakestoreapi.com/products/category/${categoryId}`);
          const productos = await resultado.json();
          setProducto(productos)
          setLoading(false);
      
        }
        else{
          const resultado = await fetch(`https://fakestoreapi.com/products`);
          const productos = await resultado.json();
          setLoading(false);
          setProducto(productos)
    
        }
        
      } catch (error) {
        console.log(error);
      }
    })();
  
}, [categoryId])

return (
  <div> {loading ? <Loader/> : <ItemList products={producto} /> } </div>
  )
}

export default ItemListContainer;