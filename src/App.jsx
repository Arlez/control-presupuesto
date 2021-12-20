import { useState } from "react"
import Header from "./components/Header"
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import Modal from "./components/Modal";
import { generarId } from "./helpers";
import ListadoGastos from "./components/ListadoGastos";

function App() {
  const [gastos, setGastos] = useState([]);
 
  const [presupuesto, setpresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);

  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);


  const handleNuevoGasto = () => {
    setModal(true);

    setTimeout( () => {
      setAnimarModal(true);
    }, 500)
  }

  const guardarGasto = gasto => {
    gasto.id = generarId();
    gasto.fecha = Date.now();
    setGastos([...gastos, gasto]);
  }

  return (
    <div className={modal ? 'fijar' : null}>
      <Header
        gastos={gastos}
        presupuesto={presupuesto}
        setpresupuesto={setpresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />

      { isValidPresupuesto &&
        ( 
          <>
            <main>
              <ListadoGastos
                gastos={gastos}
              />
            </main>
            <div className="nuevo-gasto">
              <img 
                src={IconoNuevoGasto}
                alt="icono nuevo gato" 
                onClick={handleNuevoGasto}
              />
            </div>
          </>
        )
      }

      { 
        modal && 
          <Modal 
            setModal={setModal}
            animarModal={animarModal}
            setAnimarModal={setAnimarModal}
            guardarGasto={guardarGasto}
          />
      }
    </div>
  )
}

export default App
