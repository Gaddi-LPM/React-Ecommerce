import React from 'react'
import { useState } from 'react';
import "./style.css";

const ItemCount = ({stock , inicial , onAdd}) => {

    const [Count , setCount] = useState(inicial)

    const handleAdd = () => {
        if(Count < stock) {
            setCount(Count +1)
        }
        else{
            console.log("No hay suficiente stock disponible");
        }
    }
    const handleDecrement = () => {
       setCount(Count -1)
      if(Count === 0){
        alert("Se requiere minimo una Unidad");
        setCount(inicial)
      }
    }
    const addCart = ()=>{
        onAdd(Count)
        setCount(inicial)
    }

  return (

    <div>
      <div className='container-count'>
         <button onClick={handleDecrement} className="btn-count">-</button>
         <p className="parr-count">{Count}</p>
         <button onClick={handleAdd} className="btn-count">+</button>
      </div>
      <div className="container-cart">
         {/* <button onClick={()=>onAdd(Count)}>AgregarAlCarrito</button> */}
         <button onClick={addCart} className="btn-cart">AgregarAlCarrito</button>
      </div>
    </div>
  )
}

export default ItemCount