export const setTodos = (todos) => dispatch => {
  dispatch ({
    type: 'SET_TODOS',
    todos
  })
}

export const setTodo = (todo) => dispatch => {
  dispatch ({
    type: 'SET_TODO',
    todo
  })
}