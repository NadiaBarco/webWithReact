import React from 'react'
import Products from './components/products/Products'


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
      <Products/>
    </div>
  )
}



export default App;
