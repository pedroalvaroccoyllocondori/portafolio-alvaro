import React from "react"
import { NavLink } from "react-router-dom"
import Face from "../../assets/iconos/face"
import Fono from "../../assets/iconos/fono"
import Git from "../../assets/iconos/git"



class BannerMenu extends React.Component {

    componentDidMount(){
       const prueba=document.querySelectorAll('.prueba')

       console.log(prueba.length)
       for (let i = 0; i <= prueba.length-1; i++) {
           prueba[i].addEventListener('mouseenter',()=>{
             prueba[i].classList.toggle("alvaro");

           })
           prueba[i].addEventListener('mouseleave',()=>{
             prueba[i].classList.toggle("alvaro2");

           })
           
       }
    }
    render() {
        return(
    <>
    <div className="contenedor-banner">


        <div className="prueba" id='prueba'>
            <div className="fijo">
                <Face></Face>
            </div>
            alvaro_ccoyllo
        </div>
        <div className="prueba" id='prueba'>
            <div className="fijo">
                <Fono></Fono>
            </div>
            986182701
        </div>
        <div className="prueba" id='prueba'>
            <div className="fijo">
                <Git></Git>
            </div>
            pedroalvaroccoyllocondori
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
    }
}


     
export default BannerMenu