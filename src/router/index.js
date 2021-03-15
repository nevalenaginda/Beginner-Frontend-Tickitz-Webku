import { Switch, Route } from "react-router-dom";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import Forgot from "../pages/auth/Forgot";
import Home from "../pages/main/Home";
import Detail from "../pages/main/Detail";
import Order from "../pages/main/Order";
import Payment from "../pages/main/Payment";
import Profile from "../pages/main/Profile";
import Admin from "../pages/main/Admin";

const Router = () => {
  return (
    <Switch>
      <Route path="/login" component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/forgot" component={Forgot} />
      <Route path="/" component={Home} exact />
      <Route path="/order" component={Order} />
      <Route path="/detail/:id" component={Detail} />
      <Route path="/payment" component={Payment} />
      <Route path="/profile" component={Profile} />
      <Route path="/admin/:id" component={Admin} />
    </Switch>
  );
};

export default Router;
