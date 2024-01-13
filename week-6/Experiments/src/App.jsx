import { useState , memo, useEffect } from "react"
import axios from "axios"

function App() {

  const [number, setNumber] = useState(1);


  return (
    <>
    <button onClick={() => setNumber(1)}>1</button>
    <button onClick={() => setNumber(2)}>2</button>
    <button onClick={() => setNumber(3)}>3</button>
    <button onClick={() => setNumber(4)}>4</button>
    <Todo number = {number}/>
    </>
  )
}


function Todo({number}){

  const [todo,setTodos] = useState({})

  useEffect(() => {
    axios(`https://sum-server.100xdevs.com/todo?id=${number}`)
    .then( function(res){
      setTodos(res.data.todo)
    })
  },[number])

  return <div>
    <h2>
      {todo.title}
    </h2>
    <h3>
      {todo.description}
    </h3>
  </div>
}


export default App
