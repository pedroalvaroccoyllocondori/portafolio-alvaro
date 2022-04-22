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
       const slider=document.getElementById('contenedor-banner')
       const elementos=document.querySelectorAll('.mySlides-banner-Principal')
       console.log(elementos)
       const t=elementos.length
       console.log(t)
       const ul=elementos[t-1]
       console.log(ul)
//       let ultimo=elementos[elementos.length -1]

       slider.insertAdjacentElement('afterbegin',ul)

    }
    render() {
        return(
    <>
    <div className="contenedor-banner" id='contenedor-banner'>
        <div class="mySlides-banner-Principal fades">
            <div  class="fondo-banner fondo-banner01"></div>
        </div>

        <div class="mySlides-banner-Principal fades">
            <div  class="fondo-banner fondo-banner02 "></div>

        </div>

        <div class="mySlides-banner-Principal fades">
            <div  class="fondo-banner fondo-banner03"></div>
        </div>

        <div className='conte'>
            
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
        </div>    
        <div class="nextt" onclick="plusSlides(1)">
        <svg width="2em" height="2em" viewBox="0 0 75 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M65.9195 25.566C77.1962 32.2065 77.0555 48.5642 65.6664 55.0098L25.9805 77.4696C14.5913 83.9152 0.495483 75.6146 0.608017 62.5285L1.00014 16.9296C1.11268 3.84347 15.3492 -4.21356 26.6258 2.42695L65.9195 25.566Z" fill="Currentcolor"/>
            </svg>
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