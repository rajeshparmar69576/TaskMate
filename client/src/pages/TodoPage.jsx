import React,{useEffect, useState} from 'react'
import axios from 'axios'

const TodoPage = () => {
  const [todos,setTodos] = useState([])
  const [newTitle,setNewTitle] = useState('')
  const [newDesc,setNewDesc] = useState('')


  const fetchTodos = async() => {
    try{
      const response = await axios.get('http://localhost:1001/todo')
      setTodos(response.data)
    } catch(error){
      console.error("Error while fetching data from backend",error.message)
    }
  }

  useEffect(()=>{
    fetchTodos()
  },[])

  const addTodos = async() => {
    await axios.post('http://localhost:1001/todo',       
      {
        title:newTitle,
        description:newDesc
      }
)
    setNewTitle('')
    setNewDesc('')
    await fetchTodos()
  }

  return (
    <div className='ml-[37%] '>
      <h1 className='text-5xl font-extrabold text-teal-700 mb-5 '>Todo App</h1>
      <div className='flex flex-col'>
        <input 
          value={newTitle} 
          onChange={(e)=>setNewTitle(e.target.value)}   
          className='border border-teal-400   
          rounded-2xl p-1 w-[50%]' 
          type='input'   
          placeholder='Add Task'
        />
        <input 
          value={newDesc} 
          onChange={(e)=>setNewDesc(e.target.value)}   
          className='border border-teal-400   
          rounded-2xl p-1 w-[50%]'
          type='input'   
          placeholder='Add Description'
        />
        <button 
          onClick={addTodos}
          type='submit'
          className='bg-teal-500 hover:bg-teal-600 transition duration-300 text-white ml-2 rounded-[8px] p-1 mt-2 w-[20%]'
          >
            Add
        </button>
      </div>
      {/* <ul>
          {todos.map((todo)=>(
            <li className='' key={todo._id}>{todo.title}</li>
          ))}
      </ul> */}
    </div>
  )
}

export default TodoPage