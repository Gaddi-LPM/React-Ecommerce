import React from 'react'
import "./style.css";


const Loader = () => {
  return (
    <div className='container-spinner'>
      <p> 
        Loading...  
      </p>
      <div className='bar'> </div> 
      
    </div>
  )
}

export default Loader