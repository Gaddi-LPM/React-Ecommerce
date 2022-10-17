import React from 'react'
import { useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import FullCar from '../../componets/FullCar';
import { Shop } from '../../Context/ShopProvider';
import ordenGenerada from '../../service/generarOrden';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../FireBase/config';
import { doc, updateDoc, getDoc } from "firebase/firestore";
import "./style.css";


const CartContainer = () => {
  
  const {cart, cleanCart, total} = useContext(Shop);
  const navigate = useNavigate()
  
  const carro = cart.find(item => item.title !== "");
  
  const back = ()=>{
    navigate('/');
  }

  const finishBuying = async ()=>{
    const importeTotal = total()
    const orden = ordenGenerada("matias", "maty.live", 23343456, cart, importeTotal)

    const docRef = await addDoc(collection(db, "orders"), orden);
    
    cart.forEach(async (productoCarrito) =>{
      const productRef = doc(db, "products", productoCarrito.id);
      const productSnap = await getDoc(productRef);
       await updateDoc(productRef,{ 
        stock: productSnap.data().stock - productoCarrito.quantity,
      
      });

    });

    alert(`Gracias por su compra! Se genero la orden con ID: ${docRef.id}`);
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