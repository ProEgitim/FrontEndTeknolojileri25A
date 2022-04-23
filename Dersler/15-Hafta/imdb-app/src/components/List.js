import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Button, ListGroup, ListGroupItem } from "reactstrap"
import * as actionCreators from "../redux/actions/todoActionCreators"

const List = props => {
    const removeButtonClick = item => {
        props.delete(item)
    }

    return (
        <>
            <ListGroup>
            {
                props.filteredTodos.map((item, index) => {
                    return(
                        <>
                            <ListGroupItem>
                                {item}
                                <Button close key={`todos_${index}`} onClick={() => removeButtonClick(item)} style={{float: 'right'}} />
                            </ListGroupItem>
                        </>
                    )
                })
            }
            </ListGroup>
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
        delete: bindActionCreators(actionCreators.todoDelete, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)