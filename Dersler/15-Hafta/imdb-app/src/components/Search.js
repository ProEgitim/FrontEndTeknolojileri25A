import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Input } from "reactstrap"
import * as actionCreators from "../redux/actions/todoActionCreators"

const Search = props => {
    const searchOnChange = el => {
        var filtered = el.target.value
        props.filter(filtered)
    }

    return (
        <>
            <Input placeholder="Search Todo..." type="text" onChange={el => searchOnChange(el)} />
        </>
    )
}

const mapStateToProps = state => {
    return {
        todos: state.todoReducer.todos,
        filteredTodos: state.todoReducer.filteredTodos
    }
}

const mapDispatchToProps = dispatch => {
    return {
        filter: bindActionCreators(actionCreators.todoFilter, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)