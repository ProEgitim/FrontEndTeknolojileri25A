import logo from './logo.svg';
import PropTypes from 'prop-types'
import './App.css';

{/* 
Aşağıdaki const myAppStyle ile arasındaki fark
<style>
  .myAppStyle {
    background-color: 'red',;
    font-size: 10px;
    font-weight: 'bold';
    width: 100%
  }
</style> */}

const myAppStyle = {
  backgroundColor : 'red',
  fontSize: 10,
  fontWeight: 'bold',
  width: '100%'
}

const App = props => {
  // console.log(props)
  // props.studentName = 'Berk' **read-only

  return (
    <div className="App" style={myAppStyle}>
      <header>
        <img src="logo.png" />
        <a href="index.html">Home Page</a>
        <a href="movies.html">Movies</a>
        <a href="watch.html">Watch</a>
        <a href="contact.html">Contact Page</a>
    </header>
      <div className='navbar'>
        <span> Öğrenci Adı: {props.studentName} </span>
        <span> Araç Model Yılı: {props.carModel} </span>
      </div>
    </div>
  )
}

App.propTypes = {
  studentName: PropTypes.string,
  carModel: PropTypes.number
}

App.defaultProps = {
  studentName: 'Ad',
  carModel: 2022
}

export default App;
//export { App, App2, App3 } çoklu kullanım