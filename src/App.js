import "./app.css";
import NavBar from "./componets/NavBar";
import ItemDetailContainer from "./Containers/ItemDetailContainer";
//import ItemListContainer from "./Containers/ItemListContainer";

function App() {
  return (

    <>
      <NavBar/>
      {/* <ItemListContainer greeting={"Bienvenidos a la App!"}/>  */}
      <ItemDetailContainer/>
    </>
    
  );
}

export default App;
