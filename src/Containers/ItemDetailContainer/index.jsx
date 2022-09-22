import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ItemDetail from '../../componets/ItemDetail';
import { useParams } from 'react-router-dom';
import Loader from '../../componets/Loader';

const ItemDetailContainer = () => {

    const [productDetail , setProductDetail] = useState({})
    const [loading , setLoading] = useState(true);
    const {productId} = useParams();

    useEffect(() => {

        const getProducts = async ()=> {
            try {
                const respuesta = await fetch(`https://fakestoreapi.com/products/${productId}`);
                const data = await respuesta.json();
                setProductDetail(data)
                setLoading(false);
                
            } catch (error) {
                console.log(error);
            }
        }
        getProducts();
        
    },[productId]);

  return (
    <div>
        {loading ? <Loader/> : <ItemDetail product = {productDetail}/>}
    </div>    
  )
}
export default ItemDetailContainer