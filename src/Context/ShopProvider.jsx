import { createContext } from "react";
import React from 'react'
import { useState } from "react";

export const Shop = createContext(null);

const ShopProvider = ({children}) => {
    
    const [cart , setCart] = useState([]);
    const addItem = (item)=>{

        const productoRepetido = isInCart(item.id);
        if(productoRepetido){
            const cartModified = cart.map(product =>{
                if(product.id ===item.id){
                    product.quantity += item.quantity
                    return product
                }
                return product
            })
           setCart(cartModified);
        }
        else{
            const cartModificado = [...cart, item];
            setCart(cartModificado)
        }
    }

    const isInCart = (id)=>{
        return cart.some(product => product.id ===id);
    }

    const removeItem = (itemRemove)=>{
        const filteredProducts = cart.filter(item => item !== itemRemove)
        setCart(filteredProducts)
    }

    const cleanCart = ()=>{
        setCart([])
    }

  return (
        <Shop.Provider value={{cart , addItem , removeItem , cleanCart}}>
            {children}
        </Shop.Provider>
  )
}

export default ShopProvider;