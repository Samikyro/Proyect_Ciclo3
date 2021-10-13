import {Link} from 'react-router-dom';

function BotonesHeader({nombreBoton}) {
    return (
        <li>
            <Link to="/Ventas">
                <div>
                    <button className="botonLogin">{nombreBoton}</button>
                </div>
            </Link>
        </li>
    );
}

export default BotonesHeader;
