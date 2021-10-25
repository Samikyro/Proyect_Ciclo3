import '../styles/ventas.css'
import { Link } from 'react-router-dom';
import TableVentas from '../components/VentasTable';

function Ventas() {
    return(
        <main>
                 
                <button className="mainButtonV"> Regresar </button>

                <h1>
                    <center>
                        Administrador de ventas
                    </center>
                </h1>

                <select nameName="FiltroBusqueda" className="busqueda">
                    <option selected value="0">Filtro de busqueda</option>
                    <option value="1">Cliente</option>
                    <option value="2">Producto</option>
                    <option value="3">CUSID</option>
                </select>

                <label >
                    <input type="text" placeholder="Ingresa información" className='cajaBusqueda'/>
                </label>
                
                <TableVentas></TableVentas>

                <center>
                    <Link to = '/AddVenta'>
                    <button className="boton1" type="button" onclick="alert('Se agrego correctamente')">Agregar</button>
                    </Link>
                    <button className="boton2" type="button" onclick="alert('Se Actualizo correctamente')">Editar</button>
                    <button className="boton3" type="button" onclick="alert('Se Guardo correctamente')">Guardar</button>
                </center>
        </main>
    )
}
export default Ventas;