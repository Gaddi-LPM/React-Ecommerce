import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ItemDetail from '../../componets/ItemDetail';
import { useParams } from 'react-router-dom';
import Loader from '../../componets/Loader';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../FireBase/config';

const ItemDetailContainer = () => {

    const [productDetail , setProductDetail] = useState({})
    const [loading , setLoading] = useState(true);
    const {productId} = useParams();

    useEffect(() => {

        const getProducts = async ()=> {
            try {

                const docRef = doc(db, "products", productId);
                const docSnap = await getDoc(docRef);
                
                if (docSnap.exists()) {

                    const docDetail = docSnap.data()
                    setProductDetail(docDetail)
                    setLoading(false);
               
                }else {
                    console.log("No such document!");
                }
         
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