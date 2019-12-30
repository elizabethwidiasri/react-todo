import React, { useState } from 'react'

function Home() {
  const [todos, setTodos] = useState(['buy milk', 'buy eggs'])
  const [todo, setTodo] = useState('')
  const appendTodo = (e) => {
    e.preventDefault()
    // alert('kena ' + todo)
    setTodos([...todos, todo])
    setTodo('')

  }
  return (
    <div>
       <h1>Todos</h1>
      <ul>
        { todos.map((todo, i) => (
          <li key={'todo-' + i}>{todo}</li>
        ))}
      </ul>
      {/* <p>{todo}</p> */}
      <form onSubmit={appendTodo}>
        <input type="text" value={todo} onChange={e => setTodo(e.target.value)}/>
        <input type="submit" value="Save" />
      </form>
    </div>
  )
}

export default Home