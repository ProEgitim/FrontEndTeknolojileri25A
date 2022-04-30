import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import combineStore from './redux/combineStore'

import Navs from './pages/Navs'
import Home from './pages/Home'
import Header from './components/header'
import Watch from './pages/Watch'
import Watchs from './pages/Watchs'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
let store = combineStore()

const App = () => {
  return (
    <>
      <header>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navs />}>
              <Route path='' element={<Home />} />
              <Route exact path='watch' element={<Watchs />} />
              <Route path='watch/:id' element={<Watch />} />
              <Route path='contact' element={<Contact />} />
              <Route path='*' element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </header>
      <footer>

      </footer>
    </>
  )
}

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>
, document.getElementById('root'))