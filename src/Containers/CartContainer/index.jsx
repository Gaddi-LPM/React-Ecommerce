import React from 'react'
import { useContext} from 'react';
import { Shop } from '../../Context/ShopProvider';
import "./style.css";


const CartContainer = () => {
  
  const {cart, removeItem, cleanCart} = useContext(Shop);



  console.log(cart);  
 
  
  return (
    <div className='Cart-Container'>
      
      <h3>holaaaa</h3>

      <button onClick={removeItem}>Remove</button>
      <button onClick={cleanCart}>Clear</button>

    </div>
     
    
  )
}

export default CartContainer