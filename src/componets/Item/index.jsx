import React from 'react'
import "./style.css";

const Item = ({product}) => {
  return (

    <div className='container-item'>
         <div>
             <h3>{product.name}</h3>
         </div>
         <div>
             <h4>{product.stock}</h4>
         </div>
    </div>
  )
}

export default Item