import { Navbar } from "./components/Navbar";
import { BagContainer } from "./components/BagContainer";
import { ProductInfo } from "./components/ProductInfo";
import { Switch, Route, Link } from "react-router-dom";
import { Cart } from "./components/Cart";
import { NavDrop } from "./components/NavDrop";
import { ParentHome } from "./components/Home/ParentHome";
import { SignupParent } from "./components/Signup/SignupParent";
import { SignupFlow2 } from "./components/Signup/SignupFlow2";
import { SignupFlow3 } from "./components/Signup/SignupFlow3";
import { Checkout1 } from "./components/Checkout/Checkout1";
import { Checkout2 } from "./components/Checkout/Checkout2";
import { PrivateRoute } from "./PrivateRoute/PrivateRoute";
import { Success } from "./components/Success/Success";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <ParentHome />
        </Route>
        <Route exact path="/signup">
          <SignupParent />
        </Route>
        <Route exact path="/signup2">
          <SignupFlow2 />
        </Route>
        <Route exact path="/signup3">
          <SignupFlow3 />
        </Route>
        <Route exact path="/check1">
          <Checkout1 />
        </Route>
        <Route exact path="/check2">
          <Checkout2 />
        </Route>
        <Route exact path="/product">
          <BagContainer />
        </Route>
        <PrivateRoute path="/cart">
          <Cart />
        </PrivateRoute>
        <Route exact path="/product/:id">
          <ProductInfo />
        </Route>
        <Route exact path="/success">
          <Success />
        </Route>
      </Switch>

      {/* <NavDrop /> */}
    </div>
  );
}

export default App;
