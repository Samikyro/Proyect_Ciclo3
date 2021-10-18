import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import '../styles/login.css';

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



const columns = [
  { field: 'id', headerName: 'ID', width: 5 },
  { field: 'idCliente', headerName: 'ID Cliente', type: 'number', width: 150},
  { field: 'cliente', headerName: 'Cliente', width: 150 },
  { field: 'producto', headerName: 'Producto', type: 'number', width: 150},
  { field: 'cusiddVenta', headerName: 'CUSID Venta', type: 'number', width: 180},
  { field: 'fechaInicial', headerName: 'Fecha Inicial', type: 'number', width: 170},
  { field: 'fechaFinal', headerName: 'Fecha Final', type: 'number', width: 170},
  { field: 'estado', headerName: 'Estado', type: 'number', width: 130},
  { field: 'vendedor', headerName: 'Vendedor', type: 'number', width: 200},
];

const rows = [
  { id: 1, idCliente: '000001', cliente: 'Cristian Fernandez', producto: 'Puff Moderno', cusiddVenta: 87654321, fechaInicial: '18/10/21', fechaFinal: '19/10/21', estado: 'Vendido', vendedor: 'Sebastian Cordoba'},
  { id: 2, idCliente: '000002', cliente: 'Valentina Camacho', producto: 'Silla Cubo', cusiddVenta: 2345678, fechaInicial: '30/12/21', fechaFinal: '31/12/21', estado: 'Vendido', vendedor: 'Sebastian Cordoba'},
];


export default function DataTable() {
  return (
    <div style={{ height: 300, width: '90%'}} className='posicionCajaVentas'>
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection
        />
    </div>
  );
}


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