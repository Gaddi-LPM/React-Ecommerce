import "./app.css";
import NavBar from "./componets/NavBar";
import ItemListContainer from "./Containers/ItemListContainer";

function App() {
  return (

    <>
      <NavBar/>
      <ItemListContainer greeting={"Bienvenidos a la App!"}/> 
      {/* <div className="App"></div>  */}
    </>
    
  );
}

export default App;
