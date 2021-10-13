import '../styles/gestusu.css'

function Gestionu() {
    return(
        <main className="cuerpo">
            
                <button className="mainButton"> Regresar </button>

                <h1>
                    <center>
                        Gestión de Usuarios
                    </center>
                </h1>

                <form className="cajaBusqueda">
                    <label>
                        Consulta con el ID Empleado
                        <input type="text" name="name" />
                    </label>
                </form>
                
                <table className="organizartabla"> 

                                
                    <colgroup>
                        <col span="6">
                        </col>
                    </colgroup>
                    <tr>
                    
                        <th className="colorLetra">Check</th>
                        <th className="colorLetra">ID Empleado</th>
                        <th className="colorLetra">Nombre</th>
                        <th className="colorLetra">Rol</th>
                        <th className="colorLetra">Permisos</th>
                        <th className="colorLetra">Estado</th>
                        
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

                        <td className="colorLetraNombre">00001</td>
                        <td className="colorLetraNombre"> Ana Pulido </td>

                        <td><center><select nameName="FiltroBusqueda" className="tamañoSelect">
                            <option value="CC">Administrador</option>
                            <option value="NIT">Vendedor</option>
                            <option value="TI">Ejecutivo</option>
                            <option value="TE">Operativo</option>
                            <option value="TA">Director</option>
                            <option value="TO">Gerente</option>
                        </select></center></td>

                        <td><center><select name="Rol" className="tamañoSelect">
                            <option valueName="CC">Premium</option>
                            <option valueName="NIT">Básico</option>
                            <option valueName="TI">VIP</option>
                        </select></center> </td>

                        <td><center><select nameName="FiltroBusqueda" className="tamañoSelect">
                            <option value="CC">Activo</option>
                            <option value="NIT">Inactivo</option>
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
                        <td className="colorLetraNombre">00002</td>
                        <td className="colorLetraNombre"> Sergio Salas </td>
                    
                    
                        <td><center><select nameName="FiltroBusqueda" className="tamañoSelect">
                            <option value="CC">Administrador</option>
                            <option value="NIT">Vendedor</option>
                            <option value="TI">Ejecutivo</option>
                            <option value="TE">Operativo</option>
                            <option value="TA">Director</option>
                            <option value="TO">Gerente</option>
                        </select></center></td>

                        <td><center><select name="Rol" className="tamañoSelect">
                            <option valueName="CC">Premium</option>
                            <option valueName="NIT">Básico</option>
                            <option valueName="TI">VIP</option>
                        </select></center> </td>

                        <td><center><select nameName="FiltroBusqueda" className="tamañoSelect">
                            <option value="CC">Activo</option>
                            <option value="NIT">Inactivo</option>
                        </select></center></td>
                    </tr>
                    
                </table>


                    <button className="boton1" type="button" onclick="alert('Se agrego correctamente')">Agregar</button>
                    <button className="boton2" type="button" onclick="alert('Se Actualizo correctamente')">Editar</button>
                    <button className="boton3" type="button" onclick="alert('Se Elimino correctamente')">Borrar</button>
                    <button className="boton4" type="button" onclick="alert('Se Guardo correctamente')">Guardar</button>

        </main>
    )
}
export default Gestionu;