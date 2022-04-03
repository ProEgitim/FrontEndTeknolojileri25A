import "../styles/styles.css"
import logo from "./logo.png"
import PropTypes from 'prop-types'

let user = {
    message: null,
    name: null
}

const _onPress = () => {
        user.message = 'Hoşgeldin'
        user.name = 'Tarık'
        console.log('Giris yapildiktan sonraki durum ',user)
}

const Login = props => {
    return (
        <button onClick={_onPress}>Giris Yap</button>
    )
}

const header = props => {
    console.log('Giris yapilmadan onceki durum ',user)
    return (
        <>
        <header>
            <img src={logo} alt='logo'/>
            <a href="index.html">Home Page</a>
            <a href="movies.html">Movies</a>
            <a href="watch.html">Watch</a>
            <a href="contact.html">Contact Page</a>
            <p>{user.message ?? props.helloMessage}, <span>{user.name ?? props.userName}</span></p>
            {/* <a onClick={loginClick} href="#">Giris Yap</a> */}
        </header>
        <div>
            <Login helloMessage={user.message} userName={user.name} />
            <a href="#">Kayit Ol</a>
        </div>
        </>
    )
}

header.defaultProps = {
    helloMessage: 'Merhaba',
    userName: 'kullanıcı'
}

export default header