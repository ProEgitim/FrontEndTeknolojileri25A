import { useLocation } from "react-router-dom"

const Watch = props => {
    // React-Router-Dom v6 için kullanılacak hook
    const location = useLocation()
    const data = location.state

    return (
        <div className="container mt-3">
            <div className="wrapper">
                <div className="row">
                    <div className="d-flex">
                        <div className="col-6">
                            <h3> {data.title} </h3>
                        </div>
                        <div className="col-6 d-flex justify-content-end">
                            <div className="text-end text-warning align-middle">
                                <h5 className="text-dark fw-bold"> Değerlendirme Puanı </h5>
                                <svg style={{marginBottom: 4}} width="24" height="24" xmlns="http://www.w3.org/2000/svg" className="ipc-icon ipc-icon--star-inline" id="iconContext-star-inline" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M12 20.1l5.82 3.682c1.066.675 2.37-.322 2.09-1.584l-1.543-6.926 5.146-4.667c.94-.85.435-2.465-.799-2.567l-6.773-.602L13.29.89a1.38 1.38 0 0 0-2.581 0l-2.65 6.53-6.774.602C.052 8.126-.453 9.74.486 10.59l5.147 4.666-1.542 6.926c-.28 1.262 1.023 2.26 2.09 1.585L12 20.099z"></path></svg>
                                <span className="text-dark fw-bold ms-2">{data.id + ".0"}</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="d-flex">
                            <div className="col-4">
                                <img src={data.url} className="d-block w-100" style={{ height: 300 }} />
                            </div>
                            <div className="col-8">
                                <iframe style={{width: '100%', height: 300}} src="https://www.youtube.com/embed/DtQycgMD4HQ" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        {data.title}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Watch