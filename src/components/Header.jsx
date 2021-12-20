import NuevoPresupuesto from "./NuevoPresupuesto";
import ControlPresupuesto from "./ControlPresupuesto";

const Header = ({presupuesto, setpresupuesto, isValidPresupuesto, setIsValidPresupuesto, gastos}) => {


    return ( 
        <header>
            <h1>Planificador de Gastos</h1>

            {
                isValidPresupuesto ? (
                    <ControlPresupuesto
                        presupuesto={presupuesto}
                        gastos={gastos}
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