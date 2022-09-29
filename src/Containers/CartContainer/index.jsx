import React from 'react'
import { useContext} from 'react';
import FullCar from '../../componets/FullCar';
import { Shop } from '../../Context/ShopProvider';
import "./style.css";


const CartContainer = () => {
  
  const {cart, cleanCart} = useContext(Shop);

  return (

    <div className='Cart-Container'>
      
      <h2>Bienvenido a tu Carrito</h2>
      <FullCar product={cart}/>
      <button onClick={cleanCart}>Clear Cart</button>
    
    </div>
     
  )
}

export default CartContainer