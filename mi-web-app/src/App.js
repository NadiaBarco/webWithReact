import React from 'react'
//import Products from './components/products/Products';
//import Navbar from './components/Navbar/Navbar';

import{Products, Navbar,Checkout} from './components' //UNA MANERA MAS FACIL Y CORTA DE IMPORTAR
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
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
    <Router>
      <div>
        <Navbar/>
        <Switch>
          <Route exact path="/">
              <Products/>
          </Route>

          <Route exact path ="/cart">
              
          </Route>
          <Route exact path="/Login">{/*Tengo que hacer un login --exact nose para que sirve*/ }
                <Checkout/>
          </Route>
          
          
        </Switch>
      </div>

    </Router>
  )
}



export default App;
