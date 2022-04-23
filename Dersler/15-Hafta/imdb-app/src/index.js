import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'

import Add from './components/Add'
import combineStore from './redux/combineStore'
import List from './components/List'
import Search from './components/Search'

let store = combineStore()

const App = () => {
  return (
    <div className='container mt-3'>
      <div className='col-12 mb-5'>
        <Search />
      </div>
      <div className='col-12'>
        Add Todo:
        <Add />
      </div>
      <div className='col-12 mt-3'>
        Todo List:
        <List />
      </div>
    </div>
  )
}

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>
, document.getElementById('root'))