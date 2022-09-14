import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ItemDetail from '../../componets/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    const [productDetail , setProductDetail] = useState({})
    const {productId} = useParams();

    useEffect(() => {

        const getProducts = async ()=> {
            try {
                const respuesta = await fetch(`https://fakestoreapi.com/products/${productId}`);
                const data = await respuesta.json();
                setProductDetail(data)
                
            } catch (error) {
                console.log(error);
            }
        }
        getProducts();
    },[productId])
    console.log(productDetail);

  return (
        <ItemDetail product = {productDetail}/>
  )
}
export default ItemDetailContainer