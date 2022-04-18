// import React from "react"
import React from 'react';
import Face from "../../assets/iconos/face"
import Fono from "../../assets/iconos/fono"
import Git from "../../assets/iconos/git"
import Gitlab from "../../assets/iconos/gitlab"
import Correo from "../../assets/iconos/correo"





class Contacto extends React.Component {

    componentDidMount(){
     
      
    }
    render() {
        const face=()=>{
            window.open('https://www.facebook.com/alvaro.ccoyllocondori/', '_blank');
          }
        const git=()=>{
            window.open('https://github.com/pedroalvaroccoyllocondori', '_blank');
          }
        const gitlab=()=>{
            window.open('https://gitlab.com/pedroalvaroccoyllocondori', '_blank');
          }
        return(
         <>
        <div className="contenedor">
           <div className="cart colum1 ">
            <div className="descripccion proyectos">
                        <div className="tituloDescripccion tituloDescripccion1">CONTACTAME</div>
                       <div className="contener" >
                            <div className="cartContacto" onClick={()=>{face()}}>
                                <Face></Face>
                                alvaro ccoyllo
                            </div>
                            <a className="cartContacto" href="tel:+51986182701">
                                <Fono></Fono>
                                +51986182701
                            </a>
                            <div className="cartContacto" onClick={()=>{git()}}>
                                <Git></Git>
                                alvaro ccoyllo
                            </div>
                            <a className="cartContacto" href="mailto:pedro.alvaro.ccoyllo.condori1@gmail.com">
                                <Correo></Correo>
                                pedro_alvaro@outlook.com.pe
                            </a>
                            <div className="cartContacto" onClick={()=>{gitlab()}}>
                                <Gitlab></Gitlab>
                                alvaro_ccoyllo
                            </div>
    
                       </div>
                        
            </div>
           </div>
        </div>
        </>
        )
        
    }
}




export default Contacto