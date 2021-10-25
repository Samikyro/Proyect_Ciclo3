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
                
                <div className="table-responsiv">
                    <table className="table table-bordered posicionCajaVentas table-hover table-sm">
                        <thead>
                        <tr>
                            <th>Check</th>
                            <th>ID Empleado</th>
                            <th>Nombre</th>
                            <th>Rol</th>
                            <th>Permiso</th>
                            <th>Estado</th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr>
                            <td>
                            <form>
                                <label>
                                    <center><input type="checkbox" /></center>
                                </label>
                            </form>
                            </td>
                            <td>000001</td>
                            <td>Ana Pulido</td>
                            <td>
                            <center><select nameName="FiltroBusqueda" className="tamañoSelect">
                                <option value="CC">Administrador</option>
                                <option value="NIT">Vendedor</option>
                                <option value="TI">Ejecutivo</option>
                                <option value="TE">Operativo</option>
                                <option value="TA">Director</option>
                                <option value="TO">Gerente</option>
                            </select></center>
                            </td>
                            <td>
                            <center><select name="Rol" className="tamañoSelect">
                                <option valueName="CC">Premium</option>
                                <option valueName="NIT">Básico</option>
                                <option valueName="TI">VIP</option>
                            </select></center>
                            </td>
                            <td>
                            <center><select nameName="FiltroBusqueda" className="tamañoSelect">
                                <option value="CC">Activo</option>
                                <option value="NIT">Inactivo</option>
                            </select></center>
                            </td>
                        </tr>
                        <tr >
                            <td>
                            <form>
                                <label>
                                    <center><input type="checkbox" /></center>
                                </label>
                            </form>
                            </td>
                            <td>000002</td>
                            <td>Sergio Salas</td>
                            <td>
                            <center><select nameName="FiltroBusqueda" className="tamañoSelect">
                                <option value="CC">Administrador</option>
                                <option value="NIT">Vendedor</option>
                                <option value="TI">Ejecutivo</option>
                                <option value="TE">Operativo</option>
                                <option value="TA">Director</option>
                                <option value="TO">Gerente</option>
                            </select></center>
                            </td>
                            <td>
                            <center><select name="Rol" className="tamañoSelect">
                                <option valueName="CC">Premium</option>
                                <option valueName="NIT">Básico</option>
                                <option valueName="TI">VIP</option>
                            </select></center>
                            </td>
                            <td>
                            <center><select nameName="FiltroBusqueda" className="tamañoSelect">
                                <option value="CC">Activo</option>
                                <option value="NIT">Inactivo</option>
                            </select></center>
                            </td>
                        </tr>
                        
                        </tbody>

                    </table>
                </div>

                    <button className="boton1" type="button" onclick="alert('Se agrego correctamente')">Agregar</button>
                    <button className="boton2" type="button" onclick="alert('Se Actualizo correctamente')">Editar</button>
                    <button className="boton3" type="button" onclick="alert('Se Elimino correctamente')">Borrar</button>
                    <button className="boton4" type="button" onclick="alert('Se Guardo correctamente')">Guardar</button>

        </main>
    )
}
export default Gestionu;