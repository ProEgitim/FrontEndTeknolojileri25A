import logo from "./logo.svg";
import PropTypes from "prop-types";
import "./App.css";
import { useEffect } from "react";

{
  /* 
Aşağıdaki const myAppStyle ile arasındaki fark
<style>
  .myAppStyle {
    background-color: 'red',;
    font-size: 10px;
    font-weight: 'bold';
    width: 100%
  }
</style> */
}

const myAppStyle = {
  backgroundColor: "red",
  fontSize: 10,
  fontWeight: "bold",
  width: "100%",
};

const App = (props) => {
  let student = {
    name: null,
  };
  console.log(props);
  console.log(student.name);

  const girisYap = () => {
    student.name = "Gizem";
    console.log(student.name);
  };

  return (
    <div className="App" style={myAppStyle}>
      <header>
        <img src="logo.png" />
        <a href="index.html">Home Page</a>
        <a href="movies.html">Movies</a>
        <a href="watch.html">Watch</a>
        <a href="contact.html">Contact Page</a>
      </header>
      <div className="navbar">
        <span>{student.name ? props.studentWelcome : props.studentName}</span>
        <button onClick={girisYap}>Giriş Yap</button>
        <button>Kayıt Ol</button>
      </div>
    </div>
  );
};

App.propTypes = {
  studentName: PropTypes.string,
  carModel: PropTypes.number,
};

App.defaultProps = {
  studentName: "Ad",
  carModel: 2022,
};

export default App;
//export { App, App2, App3 } çoklu kullanım
