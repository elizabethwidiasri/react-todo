import {createStore, applyMiddleware} from 'redux'
import Thunk from 'redux-thunk'

const initialTodo = {
  todos: ['buy milk', 'buy eggs'],
  todo: ''
}

function todo(state = initialTodo, action) {
  switch (action.type) {
    case 'SET_TODOS' :
      return {
        ...state,
        todos: action.todos
      }
    case 'SET_TODO' :
      return {
        ...state,
        todo: action.todo
      }
    default : 
      return state
  }
}

let store = createStore(todo, applyMiddleware(Thunk))

export default store