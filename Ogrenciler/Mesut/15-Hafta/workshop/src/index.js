import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/header'
import Footer from './components/footer'

const App = () => {
  return (
    <>
    <Header/>
    
    <Footer/>
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