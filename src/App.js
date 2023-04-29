import './App.css';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const agregarInput = valor => {
    setInput(input + valor);
  };

  const calcularResultado = () => {
    //si la cadena de caracteres esta vacia no se ejecuta el codigo
    if (input) {
      setInput(evaluate(input));
    } else {
      alert('Por favor ingrese valores');
    }
  }


  /*input es el prop y dentro de los corchetes está su valor que es el estado */
  return (
    <>
    
      <div className="App">
        <h1>Calculadora con React</h1>
        <div className='contenedor-calculadora'>
            <Pantalla input={input} />
            <div className='fila'>
              <Boton manejarClick={agregarInput}>1</Boton>
              <Boton manejarClick={agregarInput}>2</Boton>
              <Boton manejarClick={agregarInput}>3</Boton>
              <Boton manejarClick={agregarInput}>+</Boton>
            </div>
            <div className='fila'>
              <Boton manejarClick={agregarInput}>4</Boton>
              <Boton
              manejarClick={agregarInput}>5</Boton>
              <Boton manejarClick={agregarInput}>6</Boton>
              <Boton manejarClick={agregarInput}>-</Boton>
            </div>
            <div className='fila'>
              <Boton manejarClick={agregarInput}>7</Boton>
              <Boton manejarClick={agregarInput}>8</Boton>
              <Boton manejarClick={agregarInput}>9</Boton>
              <Boton manejarClick={agregarInput}>*</Boton>
            </div>
            <div className='fila'>
              <Boton manejarClick={calcularResultado}>=</Boton>
              <Boton manejarClick={agregarInput}>0</Boton>
              <Boton manejarClick={agregarInput}>.</Boton>
              <Boton manejarClick={agregarInput}>/</Boton>
            </div>
            <div className='fila'>
              <BotonClear manejarClear={() => setInput('')}>Clear</BotonClear>
            </div>
        </div>
      </div>
    </>
  );
}
/*BotonClear tiene su funcion incluida dentro ya que es muy sencilla */
export default App;
