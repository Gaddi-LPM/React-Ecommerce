import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./style.css";

const NotFound = () => {

  const navigate = useNavigate()

  const volver = ()=>{
    navigate("/")
  }

  return (
    <div className='Not-Found'>
      <h2>NotFound  =(</h2>  
      <h4>¡ Documento no Encontrado !</h4>   
      <button onClick={volver}>BACK</button> 
    </div>
  )
}

export default NotFound