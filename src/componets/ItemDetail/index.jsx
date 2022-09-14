import React from 'react'
import ItemCount from '../ItemCount';
import "./style.css";

const ItemDetail = ({product}) => {
  return (

    <div className='container-ItemDetail'>
        <img className='ItemDetail-img' src={product.image} alt="products-img" />
        <div className='ItemDetail-text'>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p> Category: {product.category}</p>
            <div className='ItemDetail-count'>
                <h4> $ {product.price}</h4>
                <ItemCount/>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail