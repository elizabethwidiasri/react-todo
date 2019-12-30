import React, { useState } from 'react'
import Todos from '../components/Todos'

function Home() {
  const [todo, setTodo] = useState('')
  return (
    <div>
      ini home beb
      <Todos />
      <p>{todo}</p>
      <form>
        <input type="text" value={todo} onChange={e => setTodo(e.target.value)}/>
        <input type="submit" value="Save" />
      </form>
    </div>
  )
}

export default Home