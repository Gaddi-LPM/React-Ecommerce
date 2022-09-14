import "./app.css";
import NavBar from "./componets/NavBar";
import ItemDetailContainer from "./Containers/ItemDetailContainer";
import ItemListContainer from "./Containers/ItemListContainer";
import NotFound from "./componets/NotFound";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (

    <BrowserRouter>
      <NavBar/>
      {/* <ItemListContainer greeting={"Bienvenidos a la App!"}/>  */}
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
        <Route path="/detail/:productId" element={<ItemDetailContainer/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
