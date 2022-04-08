import React from "react"
import { NavLink } from "react-router-dom"
import "../../estilos/estilosBannerMenu.scss"

const BannerMenu =()=>(
    <>
    <div className="contenedor-banner">
      <di className="titulo-banner">ALVARO CCOYLLO</di>
      <div className="contenedor-menu">
        <div className="item-menu contenedor-izquierda"></div>
        <div className="contenedor-derecha">
            <div className="item-menu"><NavLink exact activeClassName="estadoActivo" className="item-link" to="/">Acerca</NavLink></div>
            <div className="item-menu"><NavLink activeClassName="estadoActivo"  className="item-link" to="/proyectos">proyectos</NavLink></div>
            <div className="item-menu"><NavLink activeClassName="estadoActivo"  className="item-link" to="/contacto">contacto</NavLink></div>
            <div className="item-menu"><NavLink activeClassName="estadoActivo"  className="item-link" to="/estudios">estudios</NavLink></div>
        </div>
     
    </div>
    </div>
    </>
)

export default BannerMenu