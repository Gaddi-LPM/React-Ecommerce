import React from 'react'
import { useState } from 'react';
import "./style.css";

const Form = ({closeForm , finish , datosP}) => {

    const [error , setError] = useState("")
    const [datosForm , setDatosForm] = useState({
        nombre:"",
        email:"",
        telefono:"",
    })
    
    const handleInputChange = (e)=>{
        setDatosForm({...datosForm , [e.target.name] : [e.target.value]})
        datosP(datosForm)
        const valor = e.target.value;
        valor === "" ? setError(1) : setError(2)
    } 
    
  return (
    <div className='Form'>
        <div className='container-form'>
            <h4>YA CASI LO TIENES =)  !</h4>
            <input type="text" placeholder='Ingrese Nombre' name="nombre" onChange={handleInputChange}/>
            <input type="number" placeholder='Ingrese Telefono' name="telefono" onChange={handleInputChange} />
            <input type="email" placeholder='Ingrese e-mail' name="email" onChange={handleInputChange} />
            {(error === 1) && (<p>Complete los campos seleccionados</p>)}
            <div className='form-btn'>
                <button onClick={()=>closeForm(false)}>Cancelar</button>
                {error === 2 && <button onClick={()=>finish()}>Terminar</button>}
            </div>
        </div>
    </div> 
  )
}

export default Form