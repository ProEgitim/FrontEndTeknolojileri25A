import { Component, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navs from '../pages/Navs'

import Home from '../pages/Home'
import Watch from '../pages/Watch'
import Contact from '../pages/Contact'

import NotFound from '../pages/NotFound'

    const   Header=()=>{
         
        return( <>  <BrowserRouter>
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

export default Header


