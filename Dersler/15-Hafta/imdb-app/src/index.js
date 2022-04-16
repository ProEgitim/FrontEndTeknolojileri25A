import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navs from './pages/Navs'

import Home from './pages/Home'
import Watch from './pages/Watch'
import Contact from './pages/Contact'

import NotFound from './pages/NotFound'

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navs />}>
          <Route path='' element={<Home />} />
          <Route path='watch' element={<Watch />} />
          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

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