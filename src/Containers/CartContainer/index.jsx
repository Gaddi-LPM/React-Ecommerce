import React from 'react'
import { useContext } from 'react';
import { Shop } from '../../Context/ShopProvider';
import "./style.css";


const CartContainer = () => {
  
  const {cart, removeItem, cleanCart} = useContext(Shop);

  console.log(cart);
  console.log(removeItem);
  console.log(cleanCart);
  
  return (
    <div className='Cart-Container'>
      <h1> CartContainer </h1>
    </div>
     
    
  )
}

export default CartContainer