import React from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client';
import './index.css'
//const App = require('./App') - farklı bir kullanım
//import { App } from './App'
import App from './App'
import reportWebVitals from './reportWebVitals'

{/* <img alt="logo" /> */}

const root = createRoot(document.getElementById('root'));

const student = {
    name: 'Ayşe'
}

const cars = {
    name: 'Volvo',
    model: 2016
}

// root.render(<App />)
root.render(<App studentName={student.name} carModel={cars.model} />)

// Birden çok render edilme durumu
// -- //
// const menu = createRoot(document.getElementById('menu'));
// menu.render(<App1 />)
// const main = createRoot(document.getElementById('main'));
// main.render(<App2 />)
// const footer = createRoot(document.getElementById('footer'));
// footer.render(<App3 />)

reportWebVitals()