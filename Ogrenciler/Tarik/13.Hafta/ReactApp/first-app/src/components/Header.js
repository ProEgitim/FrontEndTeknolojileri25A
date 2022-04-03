import "../styles/styles.css"
import logo from "./logo.png"

const header = (props) => {
    const loginClick = () =>{
        return (
            <p>{props.user.name}</p>
        )
    }
    return (
            <header>
                    <img src={logo} alt='logo'/>
                    <a href="index.html">Home Page</a>
                    <a href="movies.html">Movies</a>
                    <a href="watch.html">Watch</a>
                    <a href="contact.html">Contact Page</a>
                    <p>Merhaba Kullanici</p>
                    <a onClick={loginClick} href="#">Giris Yap</a>
                    <a href="#">Kayit Ol</a>

            </header>

    )
}

export default header;