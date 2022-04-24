import { useState } from "react"

const Header = () => {
    const title=['Anasayfa','Kurumsal','İletişim']
    const [header, setHeader] = useState(title[0])
    
    const baslikDegistir = () => {
        return title.map((x,index)=>{
            if(x !== header){
                return setHeader(x)
            }
        })
    }

    return (
        <div style={styles.container}>
            <div style={styles.headerText}>
                {header}
            </div>
            <div style={styles.login}> 
                <button onClick={()=>baslikDegistir()} style={styles.loginButton}>{header == null ? 'Sayfa' : header}</button>
            </div>
        </div>
    )
}

export default Header

const styles = {
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingTop: 10,
        borderBottom: '1px solid #B3B3B3',
        backgroundColor: '#F4F4F4',
        height: 60,
        paddingLeft: 15
    },
    headerText: {
        display: 'inline',
        fontSize: 20,
        fontWeight: 600,
        alignItems: 'center'
    },
    login: {
        display: 'inline',
        float: 'right'
    },
    loginButton : {
        backgroundColor: '#92BA92',
        padding: 10,
        marginRight: 10,
        border: 0,
        color: 'white',
        fontSize: 14,
        fontWeight: 'medium'
    }
}