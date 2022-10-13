import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ItemList from '../../componets/ItemList';
import { useParams } from 'react-router-dom';
import Loader from '../../componets/Loader';
import "./style.css";
import { db } from '../../FireBase/config';
import { collection, query, where, getDocs } from "firebase/firestore";

const ItemListContainer = () => {
  
  const [producto , setProducto] = useState([])
  const [loading , setLoading] = useState(true);
  const {categoryId} = useParams();

  useEffect(()=>{

    (async () => {

      try {

          const q = !categoryId ? query(collection(db, "products")) 
          : query(collection(db, "products"), where("category", "==", categoryId))
          const querySnapshot = await getDocs(q);
          const productosFirebase =[]
          querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          productosFirebase.push({id: doc.id , ...doc.data()})
        });
        setLoading(false);
        setProducto(productosFirebase)

      } catch (error) {
        console.log(error);
      }
    })();
  
}, [categoryId])

return (
  <div> {loading ? <Loader/> : <ItemList products={producto} /> } </div>
  )
}
export default ItemListContainer;