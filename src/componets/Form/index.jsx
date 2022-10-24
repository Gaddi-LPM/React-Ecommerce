import React from 'react'
import "./style.css";

const Form = ({closeForm , finish}) => {
    
  return (
    <div className='Form'>
        <div className='container-form'>
            <h4>YA CASI ESTAMOS =)  !</h4>
            <input type="text" placeholder='Ingrese Nombre' />
            <input type="number" placeholder='Ingrese Telefono' />
            <input type="mail" placeholder='Ingrese e-mail' />
            <div className='form-btn'>
                <button onClick={()=>closeForm(false)}>Cancelar</button>
                <button onClick={()=>finish()}>Terminar</button>
            </div>
        </div>
    </div>
  )
}

export default Form