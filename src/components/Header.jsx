import NuevoPresupuesto from "./NuevoPresupuesto";
import ControlPresupuesto from "./ControlPresupuesto";

const Header = ({presupuesto, setpresupuesto, isValidPresupuesto, setIsValidPresupuesto}) => {
    return ( 
        <header>
            <h1>Planificador de Gastos</h1>

            {
                isValidPresupuesto ? (
                    <ControlPresupuesto
                        presupuesto={presupuesto}
                    />
                ) : (

                    <NuevoPresupuesto
                        presupuesto={presupuesto}
                        setpresupuesto={setpresupuesto}
                        setIsValidPresupuesto={setIsValidPresupuesto}
                    />
                )
            }

        </header>
     );
}
 
export default Header;