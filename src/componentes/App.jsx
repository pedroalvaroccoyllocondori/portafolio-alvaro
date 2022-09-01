import React,{Suspense ,useState,useEffect} from 'react'
import BannerMenu from './moleculas/BannerMenu'
import Estudios from './moleculas/Estudios'
import Contacto from './moleculas/Contacto'
import Presentacion from './moleculas/Presentacion'
import Proyectos from './moleculas/Proyectos'
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import "../estilos/style.scss"
import {Helmet} from "react-helmet";
import Loader from './moleculas/loader'



const App = ()=> {

  const[loader,setLoader]=useState(false)

  useEffect(()=>{

    setTimeout(()=>{
      setLoader(true)
     
    },2000)
    console.log("loader")
 
  },[])

    return(
      <>
      {
        !loader ? <Loader></Loader>
        
        :
        <div className="application">
        
        <Suspense fallback={<Loader></Loader>}>
            <Helmet>
                    <meta charSet="utf-8" />
                    <title>Alvaro Ccoyllo</title>
                </Helmet>
            
            
           <Router>
             <BannerMenu/>
            
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

        </Suspense>
            
      </div>
      }
      </>
     
    )
    
}


export default App;
