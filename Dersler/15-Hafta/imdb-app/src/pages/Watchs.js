import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as actionCreators from "../redux/actions/todoActionCreators"

const Watchs = props => {
    return (
        <div className="container mt-3">
            <div className="wrapper">
                <div className="row">
                    <div className="col-12">
                        Watch
                    </div>
                </div>
            </div>
        </div>
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
        add: bindActionCreators(actionCreators.todoAdd, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Watchs)