import { useState , memo, useEffect } from "react"


function App() {

  const [todos,setTodos] = useState([])

  useEffect(() => {
    fetch("https://sum-server.100xdevs.com/todos")
    .then(async function(res){
      const json = await res.json();
      setTodos(json.todos)
    })
  },[])

  return (
    <>
    {todos.map(tod => <Todo key={tod.key} title={tod.title} description={tod.description} />)}
    </>
  )
}


function Todo({title,description}){
  return <div>
    <h2>
      {title}
    </h2>
    <h3>
      {description}
    </h3>
  </div>
}


export default App
