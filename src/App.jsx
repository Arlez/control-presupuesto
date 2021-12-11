import { useState } from "react"
import Header from "./components/Header"

function App() {
 
  const [presupuesto, setpresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);

  return (
    <>
      <Header
        presupuesto={presupuesto}
        setpresupuesto={setpresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />


    </>
  )
}

export default App
