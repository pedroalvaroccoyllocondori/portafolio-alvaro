import React ,{Suspense}from "react"
import Loader from './loader'



const Proyectos=()=>(
    <>
     <Suspense fallback={<Loader></Loader>}>
    <div className="contenedor">
       <div className="cart columna1">
        <div className="descripccion proyectos">
                    <div className="tituloDescripccion tituloDescripccion1">MIS PROYECTOS</div>
                    <div className='tituloTexto tituloTexto1'>
                    SITIO WEB HOSPITAL REGIONAL DE ICA
                    <div className="hospital1"></div>
                    <div className="hospital1 hospital2"></div>
                    <div className="hospital1 hospital3"></div>

                    </div>
                </div>
       </div>
    </div>
    </Suspense>
    </>
)

export default Proyectos