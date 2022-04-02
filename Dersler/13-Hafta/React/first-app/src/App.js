import logo from './logo.svg';
import './App.css';

{/* <style>
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

function App() {
  return (
    <div className="App" style={myAppStyle}>
      <header>
        <img src="logo.png" />
        <a href="index.html">Home Page</a>
        <a href="movies.html">Movies</a>
        <a href="watch.html">Watch</a>
        <a href="contact.html">Contact Page</a>
    </header>
    </div>
  );
}

export default App;
//export { App, App2, App3 } çoklu kullanım