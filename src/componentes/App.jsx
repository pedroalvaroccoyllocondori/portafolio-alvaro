import React from 'react'
import BannerMenu from './moleculas/BannerMenu'
import Estudios from './moleculas/Estudios'
import Contacto from './moleculas/Contacto'
import Presentacion from './moleculas/Presentacion'
import Proyectos from './moleculas/Proyectos'
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"

const App=()=>(
  <Router>
    {/* <BannerMenu/> */}
    
    <Switch>
      <Route path="/" exact component={Presentacion}/>  
      <Route path="/proyectos" exact component={Proyectos}/>  
      <Route path="/contacto" exact component={Contacto}/>  
      <Route path="/estudios" exact component={Estudios}/>  
      {/* en caso q no encontremos subdominio */}
      <Route component={()=>(
        <div>
        <h1>Recurso no encontrado</h1>
        <span>pagina no encontrada</span>
        </div>
      )}/>
    </Switch>
    
  </Router>
)




export default App;
