import '../styles/addProducto.css'

function AgregarProducto() {
    return (
        <main>

            <button className="mainButton"> Regresar</button>

            <section className="contenedorSec">
                <section className="contenedorImg">
                    <p className="productoImg">Producto</p>
                    <h3>Por definir</h3>
                </section>

                <button className="passBack"><i className="fas fa-angle-left"></i></button>
                <button className="passNext"><i className="fas fa-angle-right"></i></button>
            </section>

            <section>
                <h2>Registro de Productos</h2>
                <p className="producto">Producto</p>
                <input type="text" placeholder="Nombre del producto" className="cajaProducto" />
                <p className="id">ID</p>
                <input type="text" placeholder="ID del producto" className="cajaId" />

                <p className="color">Color</p>
                <input type="text" placeholder="Color del producto" className="cajaColor" />

                <p className="valor">Valor</p>
                <input type="text" placeholder="Valor del producto" className="cajaValor" />

                <p className="cantidad">Cantidad</p>
                <input type="text" placeholder="Número de unidades" className="cajaCantidad" />

                <p className="descripcion">Descripción</p>
                <input type="text" placeholder="Descripción del producto" className="cajaDescripcion" />

                <button onclick="alert('Se Guardo correctamente')" className="bGuardar">Guardar</button>

            </section>

        </main>
    )
}

export default AgregarProducto;