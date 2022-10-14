import React from 'react'
import { useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import FullCar from '../../componets/FullCar';
import { Shop } from '../../Context/ShopProvider';
import "./style.css";

const CartContainer = () => {
  
  const {cart, cleanCart} = useContext(Shop);
  const navigate = useNavigate()
  
  const carro = cart.find(item => item.title !== "");
  
  const back = ()=>{
    navigate('/');
  }

  const finishBuying = ()=>{
    alert("Su compra se ha generado con exito.¡ GRACIAS !")
    cleanCart()
    navigate("/")
  }
  

  return (

    <div className='Cart-Container'>
      
      <h2>Welcome to your Cart</h2>
  
      { carro===undefined ? <h3>Su Carrito esta Vacio. ¡ Vamos a comprar algo !</h3> : <FullCar product={cart}/>}
      <div className='Cart-Container-button'>
        { carro===undefined ? "" : <button onClick={cleanCart}>Clear Cart</button>}
        <button onClick={back}>Back</button>
        { carro===undefined ? "" : <button onClick={finishBuying}>Terminar mi Compra</button>}
      </div>
 
    </div>
     
  )
}

export default CartContainer