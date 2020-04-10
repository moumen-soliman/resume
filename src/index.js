import React from "react";
import ReactDOM from "react-dom";
import "./assets/style/index.scss";
import App from "./App";
import { ThemeProvider } from "./ThemeContext";
import * as serviceWorker from "./serviceWorker";
import ReactGA from "react-ga";

ReactGA.initialize("UA-139161815-1"); // Here we should use our GA id

ReactGA.pageview("/");

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
