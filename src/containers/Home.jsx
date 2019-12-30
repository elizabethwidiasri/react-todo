import React, { useState } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { setTodos, setTodo } from '../store/action'
import Form from '../components/Form'
import Todo from '../components/Todo'

function Home() {
  // const [todos, setTodos] = useState(['buy milk', 'buy eggs'])
  // const [todo, setTodo] = useState('')

  const todos = useSelector(state => state.todos)
  const todo = useSelector(state => state.todo)
  const dispatch = useDispatch()

  const appendTodo = (e) => {
    e.preventDefault()
    dispatch(setTodos([...todos, todo]))
    dispatch(setTodo(''))
    // alert('kena ' + todo)
  }

  return (
    <div>
       <h1>Todos</h1>
      <ul>
        { todos.map(todo => (
          <Todo todo={todo} />
        ))}
      </ul>
      {/* <p>{todo}</p> */}
      <Form appendTodo={appendTodo} todo={todo} setTodo={setTodo} />
      
    </div>
  )
}

export default Home