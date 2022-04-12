import React from "react"
import { NavLink } from "react-router-dom"
import Face from "../../assets/iconos/face"
import Fono from "../../assets/iconos/fono"
import Git from "../../assets/iconos/git"


const BannerMenu =()=>(
    <>
    <div className="contenedor-banner">

        <div className="fijo fijo1">
            <Face></Face>
        </div>
        <div className="fijo fijo2">
            <Fono></Fono>
        </div>
        <div className="fijo fijo3">
            <Git></Git>
        </div>

        <div className="TITULO">
            <div className="CONTENEDOR_TITULO">
                <p className='LETRA-TITULO1'>PEDRO ALVARO</p>
                <p className='LETRA-TITULO2'>CCOYLLO CONDORI</p>
                <p className='LETRA-TITULO3'>PROGRAMADOR Y DISEÑADOR WEB  </p>
            </div>   
        </div>

        <div className="menu">
            <div className="item-menu"><NavLink exact activeClassName="estadoActivo" className="item-link" to="/">Acerca</NavLink></div>
            <div className="item-menu"><NavLink activeClassName="estadoActivo"  className="item-link" to="/proyectos">proyectos</NavLink></div>
            <div className="item-menu"><NavLink activeClassName="estadoActivo"  className="item-link" to="/contacto">contacto</NavLink></div>
            <div className="item-menu"><NavLink activeClassName="estadoActivo"  className="item-link" to="/estudios">estudios</NavLink></div>
        </div>

    </div>
    </>
)


        
export default BannerMenu