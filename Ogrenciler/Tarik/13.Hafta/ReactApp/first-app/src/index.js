import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './components/Header';
import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('header'));

const user = {
    name:'Tarik'
}
root.render(<Header user={user.name}  />)
// ReactDOM.render(<Header />,document.getElementById('header'));
// ReactDOM.render(<React.StrictMode><App /></React.StrictMode>,document.getElementById('menu'));
// ReactDOM.render(<React.StrictMode><App /></React.StrictMode>,document.getElementById('main'));
// ReactDOM.render(<React.StrictMode><App /></React.StrictMode>,document.getElementById('footer'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
