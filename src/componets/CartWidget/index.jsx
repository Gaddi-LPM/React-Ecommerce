import React from 'react'
import "./style.css"
import {GiShoppingCart} from 'react-icons/gi';
import { useContext } from 'react';
import { Shop } from '../../Context/ShopProvider';
import { useNavigate } from 'react-router-dom';

const CartWidget = () => {

  const {cart}= useContext(Shop)
  const navigate = useNavigate()


  const cartOut = cart.find(item => item !== "")

  const itemCart = cart.length;
 
  const backCart= ()=>{
    navigate("./cart")
  }

  return (
    
    <div className='Cart'>
      {!itemCart ? "" :<p>{itemCart}</p>} 
      {cartOut!==undefined ? <GiShoppingCart onClick={backCart}/> : "" }
    </div>
  )
}

export default CartWidget