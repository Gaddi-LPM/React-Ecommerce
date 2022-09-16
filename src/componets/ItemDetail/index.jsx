import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ItemCount from '../ItemCount';
import "./style.css";

const ItemDetail = ({product}) => {

  const [qty , setQty] = useState(0);
  const navigate = useNavigate();

  const addCart = (quantity)=>{
    setQty(quantity)
  }
  console.log(qty);

  const handleFinish = ()=>{
    navigate("/cart");
  }

  return (

    <div className='container-ItemDetail'>
        <img className='ItemDetail-img' src={product.image} alt="products-img" />
        <div className='ItemDetail-text'>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p> Category: {product.category}</p>
            <div className='ItemDetail-count'>
                <h4> $ {product.price}</h4>
                { !qty ?<ItemCount stock={10} inicial={1} onAdd={addCart}/> : <button className='btn-ItemDetail' onClick={handleFinish}> Finalizar Compra</button>}
            </div>
        </div>
    </div>
  )
}

export default ItemDetail