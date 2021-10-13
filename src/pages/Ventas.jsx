import '../styles/ventas.css'
import { Link } from 'react-router-dom';

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

                <form className="cajaBusqueda">
                    <label>
                        <input type="text" placeholder="Ingresa información"/>
                    </label>
                </form>
                
                <table className="organizartabla"> 

                                
                    <colgroup>
                        <col span="9">
                        </col>
                    </colgroup>
                    <tr>
                    
                        <th className="colorLetra">Check</th>
                        <th className="colorLetra">ID Cliente</th>
                        <th className="colorLetra">Cliente</th>
                        <th className="colorLetra">Producto</th>
                        <th className="colorLetra">CUSID de venta</th>
                        <th className="colorLetra">Fecha inicial</th>
                        <th className="colorLetra">Fecha final</th>
                        <th className="colorLetra">Estado</th>
                        <th className="colorLetra">Vendedor</th>
                        
                    </tr>
                    
                    <tr>
                        <td>
                            <form>
                                <label>
                                    <center><input type="checkbox" /></center>
                                </label>
                            </form>
                            <br />
                        </td>

                        <td className="colorLetraNombre">328724</td>
                        <td className="colorLetraNombre">Camilo Andres Davila </td>

                        <td><center><select nameName="FiltroBusqueda" className="tamañoSelect">
                            <option value="CC">Puff Moderno</option>
                            <option value="NIT">Silla Cubo</option>
                            <option value="TI">Silla Vintage</option>
                        </select></center></td>

                        <td><center><select nameName="Rol" className="tamañoSelect">
                            <option value="CC">00350</option>
                            <option value="NIT">003501</option>
                        </select></center> </td>
                        <td className="colorLetraNombre">18/10/2021</td>
                        <td className="colorLetraNombre">19/10/2021</td>

                        <td><center><select nameName="FiltroBusqueda" className="tamañoSelect">
                            <option value="CC">Vendido</option>
                            <option value="NIT">Disponible</option>
                        </select></center></td>

                        <td><center><select nameName="FiltroBusqueda" className="tamañoSelect">
                            <option valueName="CC">Ana Pulido</option>
                            <option valueName="NIT">Jhon Palacio</option>
                            <option valueName="TI">Sergio Salas</option>
                            <option valueName="CI">Juan Gomez</option>
                            <option valueName="CE">Sandra Quitian</option>
                        </select></center></td>
                    
                    </tr>
                    <tr>
                        <td>
                            <form>
                                <label>
                                    <center><input type="checkbox" /></center>
                                </label>
                            </form>
                            <br />
                        </td>
                        <td className="colorLetraNombre">42997676</td>
                        <td className="colorLetraNombre">David </td>
                    
                    
                        <td><center><select nameName="FiltroBusqueda" className="tamañoSelect">
                            <option value="CC">Puff Moderno</option>
                            <option value="NIT">Silla Cubo</option>
                            <option value="TI">Silla Vintage</option>
                        </select></center></td>

                        <td><center><select name="Rol" className="tamañoSelect">
                            <option valueName="CC">00350</option>
                            <option valueName="NIT">003501</option>
                        </select></center> </td>

                        <td className="colorLetraNombre">30/12/2021</td>
                        <td className="colorLetraNombre">31/10/2021</td>

                        <td><center><select nameName="FiltroBusqueda" className="tamañoSelect">
                            <option value="CC">Vendido</option>
                            <option value="NIT">Disponible</option>
                        </select></center></td>

                        

                        <td><center><select nameName="FiltroBusqueda" className="tamañoSelect">
                            <option valueName="CC">Ana Pulido</option>
                            <option valueName="NIT">Jhon Palacio</option>
                            <option valueName="TI">Sergio Salas</option>
                            <option valueName="CI">Juan Gomez</option>
                            <option valueName="CE">Sandra Quitian</option>
                        </select></center></td>
                    
                    </tr>
                    
                </table>
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