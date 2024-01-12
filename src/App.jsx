import { useState } from 'react';
import './App.css'
import Button from "./components/Button";


const numeros = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const operadores = ["+", "-", "*", "/"];

function App() {
  const [valorAtual, setValorAtual] = useState('');
  const [valorAnterior, setValorAnterior] = useState('');
  const [operador, setOperador] = useState('');
  const [resultado, setResultado] = useState('0');

  const concatenar = (numero) => {
    setValorAtual(valorAtual + numero);
  };

  const operacao = (op) => {
    if (valorAtual !== '') {
      setOperador(op);
      setValorAnterior(valorAtual);
      setValorAtual('');
    }
  };

  const calcular = () => {
    if (valorAtual !== '' && valorAnterior !== '') {
      switch (operador) {
        case '+':
          setResultado((parseFloat(valorAnterior) + parseFloat(valorAtual)).toString());
          break;
        case '-':
          setResultado((parseFloat(valorAnterior) - parseFloat(valorAtual)).toString());
          break;
        case '*':
          setResultado((parseFloat(valorAnterior) * parseFloat(valorAtual)).toString());
          break;
        case '/':
          setResultado((parseFloat(valorAnterior) / parseFloat(valorAtual)).toString());
          break;
        default:
          break;
      }

      setValorAnterior('');
      setOperador('');
      setValorAtual('');
    }
  };

  const limpar = () => {
    setResultado('');
    setValorAtual('');
    setValorAnterior('');
    setOperador('');
  };

  return (
    <div className='container d-flex justify-content-center'>
      <div className="calculadora d-flex flex-column justify-content-center p-2 border border-3 border-primary mt-2 align-itemns-center">
        <div className="mt-2 border border-2 border-primary w-75 rounded mb-2">
          <span className='p-3'>{valorAtual === '' ? resultado : valorAtual}</span>
        </div>
        <div className="d-flex flex-row gap-1 mb-2 flex-wrap">
          {operadores.map((e, i) => (
            <div key={i} className="">
              <Button onClick={() => operacao(e)}>{e}</Button>
            </div>
          ))}
          <Button onClick={calcular}>=</Button>
          <Button onClick={limpar}>C</Button>
        </div>
        <div className="d-flex flex-column">
          <div className="d-flex flex-row gap-1 flex-wrap">
            {numeros.map((e, i) => (
              <div key={i} className="">
                <Button onClick={() => concatenar(e)}>{e}</Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;