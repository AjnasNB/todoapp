import React,{useState ,useRef,useEffect} from 'react';
import './App.css'
import TodoList from './TodoList'
import {v4 as uuidv4} from 'uuid'
const LOCAL_STORAGE_KEY='todoApp.todos'


function App() {
  const[todos, setTodos] = useState([])
  const referencetodo = useRef()

  useEffect(
    () => {
      const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
      if(storedTodos) setTodos(storedTodos)
    },[]
  )

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(todos))
  },[todos])

  function toggle(id){
    const newTodos = [...todos]
    const todo= newTodos.find(todo =>todo.id ===id )
    todo.complete=!todo.complete
    setTodos(newTodos)
    }
 


  function addtodo(a){
    const name = referencetodo.current.value
    if(name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, {id:uuidv4, name:name, complete:false}]
    }
      )
    referencetodo.current.value=null

  }

  function cleartodos(){
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
    
  }

  return (
    <div className='App'>
    <div className='todo' >
    <TodoList dos={todos} toggle={toggle}/>
    <input ref={referencetodo} type={"text"} size={25}/>
    <button className='button' onClick={addtodo}>Add Todo </button> 
    <button className='button' onClick={cleartodos}>Clear complete</button>
    
    <div className='left' align='center'>{todos.filter(todo => !todo.complete).length} left to do</div>
              
    </div>
    </div>
         
  );
}

export default App;
