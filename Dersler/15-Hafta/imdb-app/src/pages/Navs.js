import { Link, Outlet } from 'react-router-dom'
import Search from "../components/Search"
import logo from "../assets/images/logo.png" // Logo import edildi.

const Navs = () => {
    return (
        <>
        <div className='col-12'>
            <div className='mx-auto' style={styles.container}>
                <div className='container'>
                    <div className='row' style={styles.wrapper}>
                        <div className='col-1'>
                            <img src={logo} height={38} />
                        </div>
                        <div className='col-5'>
                            <Search />
                        </div>
                        <div className='col-6 ps-5' style={styles.links}>
                            <Link className='btn btn-secondary p-1 me-2' to={''}> Anasayfa </Link>
                            <Link className='btn btn-secondary p-1 me-2' to={'watch'}> İzle </Link>
                            <Link className='btn btn-secondary p-1' to={'contact'}> İletişim </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Outlet />
        </>
    )
}

{/* <a href=""> Anasayfa </a>
<a href="/watch"> İzle </a>
<a href="/contact"> İletişim </a> */}

export default Navs

const styles = {
    container: {
        // justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        borderBottom: '1px solid #B3B3B3',
        backgroundColor: '#F4F4F4',
        height: 60
    },
    wrapper: {
        alignItems: 'center'
    },
    links: {
        display: 'inline',
        alignItems: 'center',
        fontSize: 13,
        fontWeight: 600
    }
}