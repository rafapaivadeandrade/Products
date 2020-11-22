import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Products from "./pages/Products";
import NewProduct from "./pages/NewProduct";
import EditProduct from "./pages/EditProduct";
function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/dashboard" exact component={Products} />
        <Route path="/product/new" exact component={NewProduct} />
        <Route path="/product/edit" exact component={EditProduct} />
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;
