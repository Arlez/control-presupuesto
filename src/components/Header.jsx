import NuevoPresupuesto from "./NuevoPresupuesto";

const Header = ({presupuesto, setpresupuesto, isValidPresupuesto, setIsValidPresupuesto}) => {
    return ( 
        <header>
            <h1>Planificador de Gastos</h1>

            {
                isValidPresupuesto ? (
                    <p>Control Presupuesto</p>
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