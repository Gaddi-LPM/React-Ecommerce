import React from 'react'
import { useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import FullCar from '../../componets/FullCar';
import { Shop } from '../../Context/ShopProvider';
import ordenGenerada from '../../service/generarOrden';
import { db } from '../../FireBase/config';
import { collection, addDoc, updateDoc} from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import Loader from '../../componets/Loader';
import Form from '../../componets/Form';
import Swal from 'sweetalert2'
import "./style.css";

const CartContainer = () => {
  
  const {cart, cleanCart, total} = useContext(Shop);
  const [loading , setLoading] = useState(false);
  const [openform , setOpenForm] = useState(false)
  const navigate = useNavigate()
  
  const carro = cart.find(item => item.title !== "");
  
  const back = ()=>{
    navigate('/');
  }

  const abrirForm = () =>{
    setOpenForm(!openform)
  }

  const finishBuying = async ()=>{
    setLoading(true)
    const importeTotal = total()
    const orden = ordenGenerada("matyas", "maty.live", 23343456, cart, importeTotal)
    const docRef = await addDoc(collection(db, "orders"), orden);
   
    cart.forEach( async (productoCarrito) => {
      const productRef = doc( db , "products", productoCarrito.id)
      const productSnap = await getDoc(productRef);
      
      await updateDoc(productRef,{ 
        stock: productSnap.data().stock - productoCarrito.quantity})
        
      })
      
      setLoading(false)
      
      Swal.fire({
        title: 'GRACIAS! :)',
        text: `Se genero orden con ID: ${docRef.id}`,
        icon: 'success',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
      
     cleanCart()
     navigate("/") 
    }
  
  return (

    loading ? <Loader/> : <div className='Cart-Container'>
      
      <h2>Welcome to your Cart</h2>
  
      { carro===undefined ? <h3>Su Carrito esta Vacio. ¡ Vamos a comprar algo !</h3> : <FullCar product={cart}/>}
      <div className='Cart-Container-button'>
        { carro===undefined ? "" : <button onClick={cleanCart}>Clear Cart</button>}
        <button onClick={back}>Back</button>
        {carro===undefined ? "" : <button onClick={abrirForm}>Terminar mi Compra</button>}
        {/* <button onClick={abrirForm}>form</button> */}
      </div>
         {openform && <Form closeForm={setOpenForm} finish={finishBuying}/>} 
    </div>
     
  )
}

export default CartContainer