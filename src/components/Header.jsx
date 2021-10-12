import logo from '../media/logo.jpg';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <header>
        <ul className="navbar">
            <li>
                <img src={logo} alt="imagen" className="logo" />
            </li>
            <li>
                <Link to = "/AddVenta">
                <button className="mainButton1">Administración ventas</button>
                </Link>
            </li>
            <li>
                <Link to = "/AddProducto">
                <button className="mainButton4">Productos</button>
                </Link>
            </li>
            <li>
                <button className="mainButton2">Usuarios</button>
            </li>
            <li>
                <button className="mainButton3">Seguimiento</button>
            </li>
        </ul>
    </header>

    )
}

export default Header;
