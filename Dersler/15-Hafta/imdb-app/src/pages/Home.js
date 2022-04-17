import { Link } from "react-router-dom"
import { API } from "../components/getData"

const Home = () => {
    const vitrin = API.map((data, index) => { 
        return (
            <div id={index}>
                <Link
                to={{ pathname: `watch/${data}`, 
                state: data }}>
                    <img src={data.ilkResim} width={100} />
                    <h5>{data.baslik}</h5>
                </Link>
            </div>
        )
    })

    return vitrin
}

export default Home