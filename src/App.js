import './estilos/estilos.css';
import labrador from './media/labrador.png';
import borderCollie from './media/borderCollie.png';
import logo from './media/logo.JPG';


function App() {
  return (
    <div className="App">
      <header>
        <ul className="navbar">
            <li>
                <img src={logo} alt="imagen" className="logo" />
            </li>
            <li>
                <button className="mainButton1">Inicio</button>
            </li>
            <li>
                <button className="mainButton">Productos</button>
            </li>
            <li>
                <button className="mainButton">Nosotros</button>
            </li>
            <li>
                <button className="mainButton">Contáctenos</button>
            </li>
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
    <main>
        {/* <section>
            <ul className="posicionHorizontal">
                <li className="separacion">
                    <div className="contenedorImage">
                        <img src={labrador} alt="Labrador" />
                    </div>
                    <span className="breedTittle">
                        Labrador
                    </span>
                </li>
                <li className="separacion">
                    <div className="contenedorImage">
                        <img src={borderCollie} alt="Border collie" />
                    </div>
                    <span className="breedTittle">
                        Border Collie
                    </span>
                </li>
            </ul>
        </section>
        <section></section> */}
        
    </main>
    <footer></footer>
    </div>
  );
}

export default App;
