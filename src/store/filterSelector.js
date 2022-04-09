export const filterSelector = ({filter}) => {
    return filter
}

export const filterTodosSelector = ({todos, filter}) => {
    if(filter === null){
        return todos
    }

    return todos.filter(todo => todo.completed === filter)
}