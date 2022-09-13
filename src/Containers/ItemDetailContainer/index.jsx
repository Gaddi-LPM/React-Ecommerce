import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ItemDetail from '../../componets/ItemDetail';

const ItemDetailContainer = () => {

    const [productDetail , setProductDetail] = useState({})

    useEffect(() => {

        const getProducts = async ()=> {
            try {
                const respuesta = await fetch('https://fakestoreapi.com/products/4');
                const data = await respuesta.json()
                setProductDetail(data)
                
            } catch (error) {
                console.log(error);
            }
        }
        getProducts();
    },[])
    console.log(productDetail);

  return (
        <ItemDetail product = {productDetail}/>
  )
}
export default ItemDetailContainer