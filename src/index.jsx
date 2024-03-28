/* @refresh reload */
import { render } from "solid-js/web";
// import { lazy } from "solid-js";
// import { Router, Route } from "@solidjs/router";
import App from "./App";
import "@/scss/bootstrap.scss";
// Import all of Bootstrap's JS
import "@/helper/bootstrap.js";
const root = document.getElementById("root");

render(() => <App />, root);
