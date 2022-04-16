import { Link, Outlet } from 'react-router-dom'

const Navs = () => {
    return (
        <>
        <nav>
            <ul>
                <li><Link to={''}> Anasayfa </Link></li>
                <li><Link to={'watch'}> İzle </Link></li>
                <li><Link to={'contact'}> İletişim </Link></li>
            </ul>
        </nav>

        <Outlet />
        </>
    )
}

{/* <a href=""> Anasayfa </a>
<a href="/watch"> İzle </a>
<a href="/contact"> İletişim </a> */}

export default Navs