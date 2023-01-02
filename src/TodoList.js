import React from 'react'
import Todo from './Todo'
export default function TodoList({dos,toggle}) {
  return (
    dos.map(todo => {
      return <Todo key={todo.id} toggle={toggle} todo={todo}/>
    }
    )
  )
}
  