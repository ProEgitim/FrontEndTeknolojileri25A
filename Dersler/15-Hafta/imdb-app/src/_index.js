import React from 'react'
import ReactDOM from 'react-dom'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { reducer } from './reducer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navs from './pages/Navs'

import Home from './pages/Home'
import Watch from './pages/Watch'
import Watchs from './pages/Watchs'
import Contact from './pages/Contact'

import NotFound from './pages/NotFound'
import SamplePage from './pages/SamplePage'

//const store olamaz !!
let store = createStore(reducer)

const App = () => {
  // return (
  //   <>
  //   <BrowserRouter>
  //     <Routes>
  //       <Route path="/" element={<Navs />}>
  //         <Route path='' element={<Home />} />
  //         <Route exact path='watch' element={<Watch />} />
  //         <Route path='watch/:id' element={<Watchs />} />
  //         <Route path='contact' element={<Contact />} />
  //         <Route path='*' element={<NotFound />} />
  //       </Route>
  //     </Routes>
  //   </BrowserRouter>
  //   </>
  // )
}

// ReactDOM.render(<App />, document.getElementById('root'))

// ReactDOM.render(
//   <Provider store={store}>
//     <SamplePage />
//   </Provider>
//   , document.getElementById('root'))

ReactDOM.render(
<Provider store={store}>
  <TodoApp />
</Provider>
, document.getElementById('root'))

{/* <>
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Navs />}>
      <Route index path='*' element={<Home />} />
      <Route path='watch' element={<Watch />} />
      <Route path='contact' element={<Contact />} />
    </Route>
  </Routes>
</BrowserRouter>
</> */}