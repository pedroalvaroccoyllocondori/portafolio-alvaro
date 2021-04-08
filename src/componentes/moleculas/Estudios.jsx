import React from "react"
import "../../estilos/estilosEstudios.css"



const Estudios=()=>(
    <>
     <div className="contenedor-proyectos">
        <div className="titulo">Estudios</div>
        <div className="contenedorproyectos">
            <div className="itemproyectos">
            <h1 className="itemTiTulo">Universidad San Luis Gonzaga</h1>
            <p className="itemdescripProyectos">Ing de Sistemas(estudiante de IX-ciclo)</p>
            <img className="imagenproyecto" src="data:image/jpeg;base64,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"></img>
            </div>
            <div className="itemproyectos">
            <h1 className="itemTiTulo">EDteam</h1>
            <p className="itemdescripProyectos">React desde cero, git,css,javascript</p>
            <img className="imagenproyecto exepcion" src="https://ed.team/static/images/logo/logo-alt.svg" alt="imagen"></img>
            </div>
           
        </div>
    </div>
    </>
)

export default Estudios