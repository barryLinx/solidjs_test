/* @refresh reload */
import { render } from "solid-js/web";

import App from "./App";
const RouteGuard = lazy(() => import("./router/RouteGuard"));
const Home = lazy(() => import("./pages/home"));
const Login = lazy(() => import("./pages/login"));
const root = document.getElementById("root");

render(
  () => (
    <Router root={App}>
      <Route path="/login" component={Login} />
      {/* <Route path="/" component={RouteGuard}> </Route> */}
        <Route path="/home" component={Home} />     
    </Router>
  ),
  root
);
