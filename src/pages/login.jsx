import HeaderI from '../components/HeaderI';
import Footer from '../components/Footer';
import '../styles/login.css';
import ActivacionGmail from "../components/vinculacion";


function Login() {
    return (
        <div className="Login">
            <HeaderI />

            <main>
                <section className="contenedor">
                </section>
                <section className="texto">
                    <p>
                        <h1 className="texto1">SD</h1>
                        <h1 className="texto2">Furniture</h1>1
                    </p>
                </section>

                <section>
                    <li>
                        <button className="mainButton5">Cliente</button>
                    </li>
                </section>

                <section>
                    <li>
                        <button className="mainButton6"> Empleado</button>
                    </li>
                </section>
                {/*  
                <form className="mainButton8 buscar">
                    <label>
                        Name:
                        <input type="text" name="name" />
                    </label>
                </form>
                    */}

                <section className="mainButton99 mainButton33">
                {/* <i class="fab fa-google"></i> */}
                
                <ActivacionGmail></ActivacionGmail>
                </section>

                <section className="mainButton7">
                    <li>
                        <div className="mainButton9">
                            <i className="fas fa-user"></i>
                            <button className="mainButton3">Ingresar con Usuario</button>
                        </div>
                    </li>
                </section>

            </main>
            
            <Footer />
        </div>
    )
}

export default Login;