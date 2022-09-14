import React from 'react'
import "./style.css";
import { useNavigate } from 'react-router-dom';


const Item = ({product}) => {

    const navigate = useNavigate();
    const handleNavigate = ()=>{
    navigate(`/detail/${product.id}`);
  }
  
  return (

    <div className='container-item' onClick={handleNavigate}>

      <div className='container-img'>
         <p>{product.title}</p>
         <img className='card-img' src={product.image} alt="" /> 
         {/* <p>{product.description}</p> */}
      </div>
        
    </div>
  )
}

export default Item