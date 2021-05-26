import React from 'react'
//import Products from './components/products/Products';
//import Navbar from './components/Navbar/Navbar';

import{Products, Navbar} from './components' //UNA MANERA MAS FACIL Y CORTA DE IMPORTAR

/*siempre vamos a tener un div como root*/ /**/ 

/*function App() {
  const name= 'Nadia'
  return (
     
    <div className="App">
      <h1>Hello {name}</h1>
      <button className="btn">Login</button>

      
    </div>
   
  );
}*/


const App = () => {
  return (
    <div>
      <Navbar/>
      <Products/>
    </div>
  )
}



export default App;
