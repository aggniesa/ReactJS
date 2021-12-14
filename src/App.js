import './app.scss';


//Componentes
import Navbar from "./Componentes/navbar/Navbar";
import ItemListContainer from "./Componentes/ItemListContainer";


function App () {

  const links= [
    {href:"#", name:"Inicio"},
    {href:"#", name:"Productos"},
    {href:"#", name:"Carrito"},

  ]
  const foo = () => {
    console.log("Foo");
  }

  return (
    <>
      <Navbar nombre={"E-Commerce"} links={links} foo={foo}/>
      <ItemListContainer nombreUsuario={"Inés"} apellido={"Mena"}/>
      <main>Main</main>
      
    </>
  );
}

export default App;
