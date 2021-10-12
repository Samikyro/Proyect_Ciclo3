import './styles/styles.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AgregarProducto from './pages/AgregarProducto';
import AgregarVenta from './pages/AgregarVenta';
import Layout from './layouts/Layout';

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route path='/AddVenta'>
              <AgregarVenta></AgregarVenta>
            </Route>
            <Route path='/AddProducto'>
              <AgregarProducto></AgregarProducto>
            </Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
