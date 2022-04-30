import Add from "../components/Add"
import List from "../components/List"
import { MovieRatings } from "../components/movieRatings"
import { Slider } from "../components/slider"

const Home = props => {
    return (
        <div className='container mt-3'>
            <Slider {...props} />
            <MovieRatings {...props} />
            <div className='col-12'>
            Add Todo:
            <Add />
            </div>
            <div className='col-12 mt-3'>
            Todo List:
            <List />
            </div>
        </div>
    )
}

export default Home