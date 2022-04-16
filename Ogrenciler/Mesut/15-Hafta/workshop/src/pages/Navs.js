import { Link, Outlet } from 'react-router-dom'

const Navs = () => {
    return (
        <>
          <div style={{flex:1,flexDirection:'row',justifyContent:'flex-end',borderBottom:'1px solid #B3B3B3',backgroundColor:'#F4F4F4'}}>
               
               <div style={{width:900,margin:'auto' }}> 
               <nav>
               <div style={{marginTop:0,flex:1,flexDirection:'row',display:'flex',justifyContent:'space-between'}}>
                    <div style={{paddingTop:10,paddingBottom:10}}><Link to={''}> Anasayfa </Link></div>
                    <div style={buttonStyle}><Link to={'watch'}> İzle </Link></div>
                    <div style={buttonStyle}><Link to={'contact'}> İletişim </Link></div>

                </div>
                </nav>
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

const buttonStyle={
    paddingTop:10,
    paddingBottom:10
}

const deneme={
    backgroundColor:'red'

}