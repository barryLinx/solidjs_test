import { Router, Route } from "@solidjs/router";
//import { lazy } from "solid-js";
const RouteGuard = lazy(() => import("./router/RouteGuard"));
const Home = lazy(() => import("./pages/home"));
const Login = lazy(() => import("./pages/login"));
const root = document.getElementById("root");
function App(props) {
  return (
    <>
     <Login/>
    </>
  );
}

export default App;
