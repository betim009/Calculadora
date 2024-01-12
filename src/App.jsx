import './App.css'
import Button from "./components/Button";

const numeros = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const operadores = ["+", "-", "*", "/"];

function App() {
  return (
    <div className="calculadora d-flex justify-content-center p-2">
      <div className="d-flex flex-row gap-1 mb-2 flex-wrap">
        {operadores.map((e, i) => (
          <div key={i} className="">
            <Button>{e}</Button>
          </div>
        ))}
      </div>
      <div className="d-flex flex-column">
        <div className="d-flex flex-row gap-1 flex-wrap">
          {numeros.map((e, i) => (
            <Button key={i}>{e}</Button>
          ))}
        </div>


      </div>

    </div>
  )
}

export default App;