import logo from '../media/logo.jpg';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <header>
        <ul className="navbarH">
            <li>
                <img src={logo} alt="imagen" className="logoH" />
            </li>
            <li>
                <Link to = "/Ventas">
                <button className="mainButton1H">Administración ventas</button>
                </Link>
            </li>
            <li>
                <Link to = "/AddProducto">
                <button className="mainButton4H">Productos</button>
                </Link>
            </li>
            <li>
                <Link to = "/Usuarios">
                <button className="mainButton2H">Usuarios</button>
                </Link>
            </li>
            <li>
                <button className="mainButton3H">Seguimiento</button>
            </li>
        </ul>
    </header>

    )
}

export default Header;
