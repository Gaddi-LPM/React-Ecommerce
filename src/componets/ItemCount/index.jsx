import React from 'react'
import { useState } from 'react';
import "./style.css";

const ItemCount = ({stock , inicial , onAdd}) => {

    const [count , setCount] = useState(inicial)

    const handleAdd = () => {
        if(count < stock) {
            setCount(count +1)
        }
        else{
            console.log("No hay suficiente stock disponible");
        }
    }
    const handleDecrement = () => {
       setCount(count -1)
      if(count === 1){
        alert("Se requiere minimo una Unidad");
        setCount(inicial)
      }
    }
    const addCart = ()=>{
        onAdd(count)
        setCount(inicial)
    }

  return (

    <div>
      <div className='container-count'>
         <button onClick={handleDecrement} className="btn-count">-</button>
         <p className="parr-count">{count}</p>
         <button onClick={handleAdd} className="btn-count">+</button>
      </div>
      <div className="container-cart">
         <button onClick={addCart} className="btn-cart">Add Carrito</button>
      </div>
    </div>
  )
}

export default ItemCount