import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddProducto from "./pages/AddProducto";
import AddVenta from "./pages/AddVenta";
import Layout from "./layouts/Layout";
import Ventas from "./pages/Ventas";
import Gestionu from "./pages/gestusu";
import Login from "./pages/login";


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/Login">
            <Login></Login>
          </Route>
          <Layout>
            <Switch>
              <Route path="/Ventas">
                <Ventas></Ventas>
              </Route>
              <Route path="/AddVenta">
                <AddVenta></AddVenta>
              </Route>
              <Route path="/AddProducto">
                <AddProducto></AddProducto>
              </Route>
              <Route path="/Usuarios">
                <Gestionu></Gestionu>
              </Route>
            </Switch>
          </Layout>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
