import React from 'react'
import { useContext} from 'react';
import FullCar from '../../componets/FullCar';
import { Shop } from '../../Context/ShopProvider';
import "./style.css";


const CartContainer = () => {
  
  const {cart, removeItem, cleanCart} = useContext(Shop);

  
  return (
    <div className='Cart-Container'>
      
      <FullCar product={cart} remove={removeItem}/>
      <button onClick={cleanCart}>Clear</button>

    </div>
     
    
  )
}

export default CartContainer