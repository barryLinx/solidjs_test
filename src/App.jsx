import { Router, Route } from "@solidjs/router";
import { lazy } from "solid-js";

const RouteGuard = lazy(() => import("./router/RouteGuard"));
const Home = lazy(() => import("./pages/home"));
const Login = lazy(() => import("./pages/login"));

function App() {
  return (
    <>
      <Router>
        <Route path="/login" component={Login} />
        <RouteGuard path="/" component={Home} />
      </Router>
    </>
  );
}

export default App;
