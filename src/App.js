import "./app.css";
import NavBar from "./componets/NavBar";
import ItemDetailContainer from "./Containers/ItemDetailContainer";
import ItemListContainer from "./Containers/ItemListContainer";
import NotFound from "./componets/NotFound";
import CartContainer from "./Containers/CartContainer";
import ShopProvider from "./Context/ShopProvider";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <ShopProvider>
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
    </ShopProvider>
   
    
  );
}

export default App;
