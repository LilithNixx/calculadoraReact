import React from 'react';
import '../stylesheet/BotonClear.css';


const BotonClear = (props) => (
    /*asignamos la funcion manejarClear al evento onClick */
    <div className='boton-clear' onClick={props.manejarClear}>
        {props.children}
    </div>
);

export default BotonClear;