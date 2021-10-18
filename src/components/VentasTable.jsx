import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function TableVentas() {
  return (
    <div className="table-responsiv ">
      <table className="table table-bordered posicionCajaVentas table-hover table-sm">
        <thead>
          <tr>
            <th>Check</th>
            <th>ID Cliente</th>
            <th>Cliente</th>
            <th>Producto</th>
            <th>CUSID de Venta</th>
            <th>Fecha Inicial</th>
            <th>Fecha Final</th>
            <th>Estado</th>
            <th>Vendedor</th>
          </tr>
        </thead>

        <tbody >
          <tr >
            <td>
              <form>
                  <label>
                    <center><input type="checkbox" /></center>
                  </label>
              </form>
            </td>
            <td>000001</td>
            <td>Cristian Fernandez</td>
            <td>
              <center><select nameName="FiltroBusqueda" className="tamañoSelect">
                      <option value="CC">Puff Moderno</option>
                      <option value="NIT">Silla Cubo</option>
                      <option value="TI">Silla Vintage</option>
              </select></center>
            </td>
            <td>87654321</td>
            <td>18/10/21</td>
            <td>19/10/21</td>
            <td>
              <center><select nameName="FiltroBusqueda" className="tamañoSelect">
                      <option value="CC">Vendido</option>
                      <option value="NIT">Disponible</option>
              </select></center>
            </td>
            <td>Sebastian Cordoba</td>
          </tr>
          <tr>
            <td>
              <form>
                  <label>
                    <center><input type="checkbox" /></center>
                  </label>
              </form>
            </td>
            <td>000002</td>
            <td>Valentina Camacho</td>
            <td>
              <center><select nameName="FiltroBusqueda" className="tamañoSelect">
                              <option value="CC">Puff Moderno</option>
                              <option value="NIT">Silla Cubo</option>
                              <option value="TI">Silla Vintage</option>
              </select></center>
            </td>
            <td>2345678</td>
            <td>30/12/21</td>
            <td>31/12/21</td>
            <td>
              <center><select nameName="FiltroBusqueda" className="tamañoSelect">
                      <option value="CC">Vendido</option>
                      <option value="NIT">Disponible</option>
              </select></center>
            </td>
            <td>Sebastian Cordoba</td>
          </tr>
        </tbody>

      </table>
    </div>
  )
}
export default TableVentas;