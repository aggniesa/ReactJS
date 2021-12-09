import logo from './logo.svg';
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

  return (
    <>
      <Navbar nombre="Ines" edad={29} links={links}/>
      <main>Main</main>
      <ItemListContainer saludo=""/>
    </>
  );
}

export default App;
