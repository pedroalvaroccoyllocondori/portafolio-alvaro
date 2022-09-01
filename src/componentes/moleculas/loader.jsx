import React from "react"
import { ProgressBar } from  'react-loader-spinner'
import { Wave } from "react-animated-text";






const Loader=()=>(
    <>



    <div className="loader">

       <Wave text="CARGANDO CONTENIDO ..." effect="fadeOut" effectChange={2.0} /> 
        <ProgressBar
            height="80"
            width="80"
            ariaLabel="progress-bar-loading"
            wrapperStyle={{}}
            wrapperClass="progress-bar-wrapper"
            borderColor = '#D4D4D4'
            barColor = '#B7B7B7'
        />
    </div>
    </>
)

export default  Loader