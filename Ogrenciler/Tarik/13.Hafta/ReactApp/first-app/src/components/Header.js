import "../styles/styles.css"
import logo from "./logo.png"
const header = ()=>{
    return (
        <div>
        <header>
            <img src={logo} alt='logo'/>
            <a href="index.html">Home Page</a>
            <a href="movies.html">Movies</a>
            <a href="watch.html">Watch</a>
            <a href="contact.html">Contact Page</a>
        </header>  
        </div>
   
    )
}
export default header;