import React from 'react'
import "./style.css";


const FullCar = (props) => {

    //console.log(props.remove);


  return (

        <div>
            {props.product.map(item =>{
                return <div className='container-fullCar' key={item.id}>

                          <img src={item.image} style={{width:70 , height:70}} alt="product"/>
                          <p>{item.title}</p>
                          <p>{item.price}</p>
                          <p>{item.quantity}</p>
                          <button>REMOVE</button>

                        </div>
            } )}
        </div>

  )
}

export default FullCar