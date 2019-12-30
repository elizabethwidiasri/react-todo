import React from 'react'

function Todos() {
  // <> React.Fragment

  const todos = ['buy milk', 'buy eggs']

  return (
    <>
      <h1>Todos</h1>
      <ul>
        { todos.map((todo, i) => (
          <li key={'todo-' + i}>{todo}</li>
        ))}
      </ul>
    </>
  )
}

export default Todos