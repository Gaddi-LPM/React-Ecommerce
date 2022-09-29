import React from 'react'
import { useContext } from 'react';
import { Shop } from '../../Context/ShopProvider';
import "./style.css";


const FullCar = (props) => {

    const {removeItem} = useContext(Shop);

  return (

        <div className='fullcart'>
            {props.product.map(item =>{
                return <div className='container-fullCar' key={item.id}>

                          <img src={item.image} style={{width:70 , height:70}} alt="product"/>
                          <p>{item.title}</p>
                          <p>${item.price}</p>
                          <p>Cantidad {item.quantity}</p>
                          <button onClick={()=>removeItem(item)}>REMOVE</button>

                        </div>
            } )}
        </div>

  )
}

export default FullCar