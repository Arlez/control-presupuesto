import { useState, useEffect } from "react"
import Header from "./components/Header"
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import Modal from "./components/Modal";
import { generarId } from "./helpers";
import ListadoGastos from "./components/ListadoGastos";

function App() {
  const [gastos, setGastos] = useState(
    localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')) : []
  );
 
  const [presupuesto, setpresupuesto] = useState(
    Number(localStorage.getItem('presupuesto')) ?? 0
  );
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);

  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);

  const [gastoEditar, setGastoEditar] = useState({});

  useEffect(() => {
    if(Object.keys(gastoEditar).length > 0){
      setModal(true);
      setTimeout( () => {
        setAnimarModal(true);
      }, 500)
    }
  }, [gastoEditar]);

  useEffect(() => {
    localStorage.setItem('presupuesto', presupuesto ?? 0);
  }, [presupuesto])

  useEffect(() => {
    localStorage.setItem('gastos',  JSON.stringify(gastos) ?? []);
  }, [gastos])

  useEffect(() => {
    const presupuestoLS = Number(localStorage.getItem('presupuesto')) ?? 0;
    if(presupuestoLS > 0){
      setIsValidPresupuesto(true);
    }
  }, []);

  const handleNuevoGasto = () => {
    setGastoEditar({});
    setModal(true);

    setTimeout( () => {
      setAnimarModal(true);
    }, 500)
  }

  const eliminarGasto = id => {
    const gastosActualizados = gastos.filter( gasto => gasto.id !== id);
    setGastos(gastosActualizados);
  }

  const guardarGasto = gasto => {
    if(gasto.id){
      const gastosActualizados = gastos.map(gastoState => gastoState.id === gasto.id ? gasto : gastoState);
      setGastos(gastosActualizados);
      setGastoEditar({});
    }else{
      gasto.id = generarId();
      gasto.fecha = Date.now();
      setGastos([...gastos, gasto]);
    }

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
                setGastoEditar={setGastoEditar}
                eliminarGasto= {eliminarGasto}
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
            gastoEditar={gastoEditar}
            setGastoEditar={setGastoEditar}
          />
      }
    </div>
  )
}

export default App
