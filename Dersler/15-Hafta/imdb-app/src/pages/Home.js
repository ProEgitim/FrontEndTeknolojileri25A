import Add from "../components/Add"
import List from "../components/List"
import { Slider } from "../components/slider"

const Home = () => {
    return (
        <div className='container mt-3'>
            <Slider />
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