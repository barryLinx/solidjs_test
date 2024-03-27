import { Router, Route } from "@solidjs/router";
//import { lazy } from "solid-js";

function App(props) {
  return (
    <>
      <div class="container">
        <div className="row overflow-x-hidden overflow-y-hidden">
          {/* <Sidebars /> */}
          {/* <Show when={localAccessToken()} fallback={navigate("/login", { replace: true })}> </Show> */}
          {props.children}
        </div>
        {/* <Toaster/> */}
      </div>
    </>
  );
}

export default App;
