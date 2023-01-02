import React from 'react'


export default function Todo({todo,toggle}) {
    function toggleclick(){
    toggle(todo.id)
}

  return (
    <div>
    <label>
    <input type={"checkbox"} checked={todo.complete} onChange={toggleclick}></input>
    {todo.name}
    </label>
    </div>
  )
}
