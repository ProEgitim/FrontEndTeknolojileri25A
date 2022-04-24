import { useEffect, useState } from "react"

const Slider = () => {
    const [sliderData, setSliderData] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos').then(response => response.json())
        .then(data => {
            return setSliderData(data.slice(0, 3))
        })
    }, [])

    return (
        sliderData.length > 0 &&
        <div className="wrapper">
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
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
              </div>
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