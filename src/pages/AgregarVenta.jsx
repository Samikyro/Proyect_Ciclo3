import '../styles/addVenta.css'

function AgregarVenta() {
    return (
        <main>
            <button className="mainButton"> Regresar</button>

            <section className="contenedorSecV">
                <section className="contenedorImg">
                    <p className="productoImg">Producto</p>
                    <h3>Por definir</h3>
                </section>

                <button className="passBackV"><i className="fas fa-angle-left" ></i></button>
                <button className="passNextV"><i className="fas fa-angle-right"></i></button>
            </section>

            <section>
                <h2>Registro de ventas</h2>

                <p className="clienteV">Cliente</p>
                <input type="text" placeholder="Nombre del cliente" className="cajaClienteV" />

                <p className="tipoV">Tipo</p>
                <select name="tipo" className="seTipoV">
                    <option value="CC">CC</option>
                    <option value="NIT">NIT</option>
                    <option value="TI">TI</option>
                    <option value="CE">CE</option>
                </select>

                <p className="documentoV">Documento de identidad</p>
                <input type="text" placeholder="Número de documento" className="cajaDocumentoV" />

                <p className="productoV">Producto</p>
                <input type="text" placeholder="Nombre del producto" className="cajaProductoV" />

                <p className="cusidV">CUSID de venta</p>
                <input type="text" placeholder="Codigo de venta" className="cajaCUSIDV" />

                <p className="valorVentaV">Valor de venta</p>
                <input type="text" placeholder="Valor de la venta" className="cajaValorV" />

                <p className="descripcionV">Descripción</p>
                <input type="text" placeholder="Descripción de la venta" className="cajaDescripcionV" />

                <p className="fechaIV">Fecha inicial</p>
                <input type="date" name="fechaI" id="1" className="cajaFechaIV" />

                <p className="fechaFV">Fecha final</p>
                <input type="date" name="fechaF" id="1" className="cajaFechaFV" />

                <p className="estadoV">Estado</p>
                <select name="estado" className="seEstadoV">
                    <option value="En proceso">En proceso</option>
                    <option value="Vendido">Vendido</option>
                </select>

                <button onclick="alert('Se Guardo correctamente')" className="bGuardarV">Guardar</button>

            </section>
        </main>
    )
}

export default AgregarVenta;