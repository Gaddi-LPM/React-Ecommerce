import React from 'react'
import NavBar from "../componets/NavBar";
import ItemDetailContainer from "../Containers/ItemDetailContainer";
import ItemListContainer from "../Containers/ItemListContainer";
import NotFound from "../componets/NotFound";
import CartContainer from "../Containers/CartContainer";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const Root = () => {
  return (

    <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
          <Route path="/detail/:productId" element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<CartContainer/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
    </BrowserRouter> 
  )
}

export default Root