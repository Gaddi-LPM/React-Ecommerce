import React from 'react'
import "./style.css";


const Item = ({product}) => {
  return (

    <div className='container-item'>

      <div className='container-img'>
         <img className='card-img' src={product.imagen} alt="" /> 
         <h3>{product.name}</h3>
         {/* <p>{product.description}</p> */}
      </div>
        
    </div>
  )
}

export default Item