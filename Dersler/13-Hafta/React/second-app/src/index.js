import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//-- Main function
let isLoading = true

const loadData = () => {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
  .then(x => (x !== null && x !== undefined && x !== '') ? isLoading = false : isLoading = true).catch(e => isLoading = true)
}

loadData()

ReactDOM.render(
  !isLoading ? <App /> : <ErrorPageHandler statusCode={x.data.statusCode} />, document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
