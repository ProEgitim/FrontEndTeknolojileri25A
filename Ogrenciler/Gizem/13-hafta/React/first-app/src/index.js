import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
//const App = require('./App') - farklı bir kullanım
//import { App } from './App'
import App from "./App";
import reportWebVitals from "./reportWebVitals";

{
  /* <img alt="logo" /> */
}

const root = createRoot(document.getElementById("root"));

const student = {
  name: "Merhaba",
  welcome: "Hoşgeldiniz",
};

/*
const cars = {
  name: "Volvo",
  model: 2016,
};
*/

// root.render(<App />)
root.render(
  <App studentName={student.name} studentWelcome={student.welcome} />
);

// Birden çok render edilme durumu
// ReactDOM.render(<React.StrictMode><App /></React.StrictMode>, document.getElementById('menu'))
// ReactDOM.render(<React.StrictMode><App /></React.StrictMode>, document.getElementById('main'))
// ReactDOM.render(<React.StrictMode><App /></React.StrictMode>, document.getElementById('footer'))

reportWebVitals();
