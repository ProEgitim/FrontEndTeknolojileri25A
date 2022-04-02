import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
//const App = require('./App') - farklı bir kullanım
//import { App } from './App'
import App from './App'
import reportWebVitals from './reportWebVitals'

{/* <img alt="logo" /> */}
ReactDOM.render(<App />, document.getElementById('header'))

// Birden çok render edilme durumu
// ReactDOM.render(<React.StrictMode><App /></React.StrictMode>, document.getElementById('menu'))
// ReactDOM.render(<React.StrictMode><App /></React.StrictMode>, document.getElementById('main'))
// ReactDOM.render(<React.StrictMode><App /></React.StrictMode>, document.getElementById('footer'))

reportWebVitals()