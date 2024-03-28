import { Router, Route } from "@solidjs/router";
import { lazy } from "solid-js";
const RouteGuard = lazy(() => import("./router/RouteGuard"));
const Home = lazy(() => import("./pages/home"));
//import Home from "./pages/home";
const Login = lazy(() => import("./pages/login"));

function App() {
  return (
    <>
      <Router>
        <Route path="/" component={RouteGuard}> </Route>
        <Route path="/home" component={Home}></Route>       
        <Route path="/login" component={Login}></Route>
      </Router>
    </>
  );
}

export default App;
