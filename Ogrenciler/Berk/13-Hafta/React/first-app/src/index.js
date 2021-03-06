import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './Components/header';
import Slider from './Components/slider';
import reportWebVitals from './reportWebVitals';
import * as ReactDOMClient from 'react-dom/client';

const root = ReactDOMClient.createRoot(document.getElementById('header'));

root.render(<App />);

// ReactDOM.render(<React.StrictMode><App /></React.StrictMode>,document.getElementById('menu'));
// ReactDOM.render(<React.StrictMode><App /></React.StrictMode>,document.getElementById('main'));
// ReactDOM.render(<React.StrictMode><App /></React.StrictMode>,document.getElementById('footer'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
