import React from "react"
import { NavLink } from "react-router-dom"
import "../../estilos/estilosBannerMenu.scss"

const BannerMenu =()=>(
    <>
      <div className="menu">
            <div className="item-menu"><NavLink exact activeClassName="estadoActivo" className="item-link" to="/">Acerca</NavLink></div>
            <div className="item-menu"><NavLink activeClassName="estadoActivo"  className="item-link" to="/proyectos">proyectos</NavLink></div>
            <div className="item-menu"><NavLink activeClassName="estadoActivo"  className="item-link" to="/contacto">contacto</NavLink></div>
            <div className="item-menu"><NavLink activeClassName="estadoActivo"  className="item-link" to="/estudios">estudios</NavLink></div>
        </div>
    <div className="contenedor-banner">
        <div className="TITULO">
            <div className="CONTENEDOR_TITULO">
                <p>PEDRO ALVARO</p>
                <p>CCOYLLO CONDORI</p>
                <p>PROGRAMADOR Y DISEÑADOR WEB  </p>
            </div>   
        </div>

      

    </div>
    </>
)
        
export default BannerMenu