import { useEffect, useState } from "react"

const Slider = props => {
    const [photos, setPhotos] = useState([])
    const [getTop5Slider, setGetTop5Slider] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(data => {
          //veriyi stringify ile string formatına dönüştür
          // JSON.stringify(data)

          //veriyi parse ile JSON verisi olarak dönüştür
          // JSON.parse(data)
          
          // data.slice(start)
          // data.slice(start,end)

          // Bize BE den Tersten sıralı ve yeni bir kayıt gelecek şekilde olduğunu düşünelim.
          setGetTop5Slider(data.slice(0, 5))
          return setPhotos(data.slice(0, 50))
        })
        
        // ComponentWillUnmount
        return () => {}
    }, [])
    // }, [sliderData])

    //[sliderData] -- componentDidUpdate

    return (
        getTop5Slider.length > 0 &&
        <div className="wrapper">
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
            {
                getTop5Slider.map((x, index) => {
                  return (
                  <button 
                    key={x.id + "-indicator"}
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    className={index == 0 ? 'active' : null}
                    aria-current={index == 0 ? true : null}
                    data-bs-slide-to={index}
                    aria-label={"Slide " + x.id} />)
                })
            }
              {/* <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button> */}
            </div>
            <div className="carousel-inner">
              {
                getTop5Slider.map((x, index) => {
                  return (
                    <div className={index == 0 ? "carousel-item active" : "carousel-item"} key={x.id + "-slider"}>
                    <img src={x.url} className="d-block w-100" style={{ height: 300 }} alt= {"Slider-" + x.id} />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>{x.title}</h5>
                        {/* <p>First Movie description</p> */}
                    </div>
                  </div>
                  )
                })
              }
              {/* <div className="carousel-item active">
                <img src={sliderData[0].url} className="d-block w-100" style={{ height: 300 }} alt="Slider-1" />
                <div className="carousel-caption d-none d-md-block">
                    <h5>First Movie</h5>
                    <p>First Movie description</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={sliderData[1].url} className="d-block w-100" style={{ height: 300 }} alt="Slider-2" />
                <div className="carousel-caption d-none d-md-block">
                    <h5>Second Movie</h5>
                    <p>Second Movie description</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={sliderData[2].url} className="d-block w-100" style={{ height: 300 }} alt="Slider-3" />
                <div className="carousel-caption d-none d-md-block">
                    <h5>Third Movie</h5>
                    <p>Third Movie description</p>
                </div>
              </div> */}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Önceki</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Sonraki</span>
            </button>
        </div>
    </div>
    )
}

export { Slider }