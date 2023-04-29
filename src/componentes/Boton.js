import React from 'react';
import '../stylesheet/Boton.css'

function Boton(props) {

    const esOperador = valor => {
        //isnNan() dice si el valor es un numero o no
        return isNaN(valor) && (valor !== '.') && (valor !== '=')
    };
    return (
        <div 
            /*trimEnd() quita espacios del final de una cadena de caracteres
            children funciona cuando los props tienen las etiquetas de apertura y cierre
            onClick necesita una funcion por lo que se usa una funcion anonima en este caso */
            className= {`boton-contenedor ${esOperador(props.children) ? 'operador' : null}`.trimEnd()} onClick={() => props.manejarClick(props.children)}>
            
            
            {props.children}
        </div>
    );
}

export default Boton;