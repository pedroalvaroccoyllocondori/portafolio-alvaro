import React from "react"
import Face from "../../assets/iconos/face"
import Fono from "../../assets/iconos/fono"
import Git from "../../assets/iconos/git"
import Gitlab from "../../assets/iconos/gitlab"
import Correo from "../../assets/iconos/correo"


const Contacto=()=>(
    <>
    <div className="contenedor">
       <div className="cart colum1 ">
        <div className="descripccion proyectos">
                    <div className="tituloDescripccion tituloDescripccion1">CONTACTAME</div>
                   <div className="contener">
                        <div className="cartContacto">
                            <Face></Face>
                        </div>
                        <div className="cartContacto">
                            <Fono></Fono>
                        </div>
                        <div className="cartContacto">
                            <Git></Git>
                        </div>
                        <div className="cartContacto">
                            <Correo></Correo>
                        </div>
                        <div className="cartContacto">
                            <Gitlab></Gitlab>
                        </div>

                   </div>
                    
        </div>
       </div>
    </div>
    </>
)
export default Contacto