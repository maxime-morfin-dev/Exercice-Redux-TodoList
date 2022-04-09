import {useDispatch} from "react-redux";
import {useRef} from "react";
import {addTodoAction} from "../store/todosActions";

export function AddTodoForm(){
    const dispatch = useDispatch()
    const input = useRef(null);
    const handleSubmit = e => {
        e.preventDefault()
        dispatch(addTodoAction(input.current.value))

        input.current.value = ''
        input.current.focus()
    }

    return <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Tâche" ref={input}/>
        <button>Ajouter</button>
    </form>
}