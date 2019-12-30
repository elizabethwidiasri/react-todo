import React from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { setTodo } from '../store/action'



function Form({ appendTodo }) {

  const todo = useSelector(state => state.todo)
  const dispatch = useDispatch()

  return (
    <form onSubmit={appendTodo}>
        <input type="text" value={todo} onChange={e => dispatch(setTodo(e.target.value))}/>
        <input type="submit" value="Save" />
      </form>
  )
}

export default Form