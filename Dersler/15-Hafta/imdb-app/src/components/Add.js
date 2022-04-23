import { useState } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { InputGroup, Input, Button } from "reactstrap"
import * as actionCreators from "../redux/actions/todoActionCreators"

const Add = props => {
    const [todo, setTodo] = useState('')

    const addButtonClick = () => {
        props.add(todo)
    }

    return (
        <>
        <InputGroup>
            <Input onChange={e => setTodo(e.target.value)} />
            <Button onClick={() => addButtonClick()}> Ekle </Button>
        </InputGroup>
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
        add: bindActionCreators(actionCreators.todoAdd, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Add)