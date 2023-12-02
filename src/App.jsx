import React from 'react'
import CartWidget from './componentes/CartWidget/CartWidget'
import Mensaje from './componentes/Mensaje/Mensaje'
import TituloPrincipal from './componentes/ItemAcount/ItemAcount'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
const App = () => {
  return (
    <div>
     
    
    <NavBar/>
    <ItemListContainer greeting="Hola Mundo"/>
    
    </div>
  )
}

export default App