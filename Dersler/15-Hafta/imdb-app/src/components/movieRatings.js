import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const MovieRatings = props => {
    const [photos, setPhotos] = useState([])
    const [getTop6FilmThumnails, setGetTop6FilmThumnails] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(data => {
        
        // reverse() tersten sıralar..
        // data = Object.assign({}, data) -- Salt olarak obje üzerinden dönüşüm
          setGetTop6FilmThumnails(data.reverse().slice(0, 6))
          return setPhotos(data.slice(0, 50))
        })
    }, [])

    return (
        <div className="wrapper">
            <div className="card-group text-center my-3" style={{marginLeft: '-0.25rem', marginRight: '-0.25rem'}}>
                {
                    getTop6FilmThumnails.map(x=> {
                        return (
                            <div key={x.id + "-movieRatings"} className="card mx-1 border-start border-end">
                                <img src={x.thumbnailUrl} className="card-img-top" alt={x.title} />
                                <div className="card-body">
                                    <p className="card-text text-start text-warning align-middle">
                                        <svg style={{marginBottom: 4}} width="16" height="16" xmlns="http://www.w3.org/2000/svg" className="ipc-icon ipc-icon--star-inline" id="iconContext-star-inline" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M12 20.1l5.82 3.682c1.066.675 2.37-.322 2.09-1.584l-1.543-6.926 5.146-4.667c.94-.85.435-2.465-.799-2.567l-6.773-.602L13.29.89a1.38 1.38 0 0 0-2.581 0l-2.65 6.53-6.774.602C.052 8.126-.453 9.74.486 10.59l5.147 4.666-1.542 6.926c-.28 1.262 1.023 2.26 2.09 1.585L12 20.099z"></path></svg>
                                        <span className="text-dark fw-bold ms-2">{x.id + ".0"}</span>
                                    </p>
                                    <h5 className="card-title">{x.title}</h5>
                                </div>
                                <Link to={{ pathname: '/watch/' + x.id }} state={x} className="btn btn-outline-success align-bottom rounded-0">Go Detail</Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export { MovieRatings }