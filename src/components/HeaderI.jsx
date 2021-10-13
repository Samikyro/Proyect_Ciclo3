import logo from '../media/logo.jpg';
import BotonesHeader from '../components/BotonesHeader';

const HeaderI = () => {
    return (
        <header>
                <ul className="navbar">
                    <li>
                        <img src={logo} alt="imagen" className="logo" />
                    </li>
                    <li>
                        <button className="mainButton1">Inicio</button>
                    </li>   
                        <BotonesHeader nombreBoton="Productos"/>
                        <BotonesHeader nombreBoton="Ventas"/>
                        <BotonesHeader nombreBoton="Contáctenos"/>
                    <li>
                        <div className="mainButton4">
                        <i className="fas fa-shopping-cart"></i>
                        <button className= "mainButton3">Registro</button>
                        </div>
                    </li>
                    <li>
                        <div className="mainButton2">
                        <i className="fas fa-user"></i>
                        <button className= "mainButton3">Ingresar</button>
                        </div>
                    </li>
                </ul>
            </header>
    )
}

export default HeaderI;