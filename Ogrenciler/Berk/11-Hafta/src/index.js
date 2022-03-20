//const react = require('react')
//import react from 'react'
// import { ReactDOM } from 'react'

import { message, plus, minus, multiplication, divide } from './modules'

document.getElementById('Mesaj').innerHTML = message('Veri Gönderdim')
document.getElementById('Topla').innerHTML = plus(5,2)
document.getElementById('Cikar').innerHTML = minus(5,2)
document.getElementById('Carp').innerHTML = multiplication(5,2)
document.getElementById('Bol').innerHTML = divide(5,2)