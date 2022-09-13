import React from 'react'
import "./style.css";


const Item = ({product}) => {
  return (

    <div className='container-item'>

      <div className='container-img'>
         <p>{product.title}</p>
         <img className='card-img' src={product.image} alt="" /> 
         {/* <p>{product.description}</p> */}
      </div>
        
    </div>
  )
}

export default Item