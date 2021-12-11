import {useState} from 'react';
import Mensaje from './Mensaje';

const NuevoPresupuesto = ({presupuesto, setpresupuesto, setIsValidPresupuesto}) => {

    const [mensaje, setmensaje] = useState('');

    const handlePresupuesto = (e) => {
        e.preventDefault();

        if(!presupuesto || presupuesto < 0){
            setmensaje('No es un valor valido');
            return;
        }
        setmensaje('');
        setIsValidPresupuesto(true)
    }

    return (
        <div className="contenedor-presupuesto contenedor sombra">
            <form 
                className="formulario"
                onSubmit={handlePresupuesto}    
            >
                <div className="campo">
                    <label htmlFor="">Definir Presupuesto</label>

                    <input 
                        type="number" 
                        className="nuevo-presupuesto"
                        placeholder="Añade tu Presupuesto"
                        min='0'
                        value={presupuesto}
                        onChange={e => setpresupuesto(e.target.value)}
                    />
                </div>

                <input 
                    type="submit" 
                    value="Añadir"
                />

                { mensaje && <Mensaje tipo="error">{mensaje}</Mensaje> }

            </form>
        </div>
      );
}
 
export default NuevoPresupuesto;