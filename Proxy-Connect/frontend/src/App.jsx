import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect( () => {
    axios.get('/api/jokes')
    .then((res) => {
      setJokes(res.data)
    })
    .catch((err) => {
      console.log("Erro");
    })
  })
  return (
    <>
      <h1>Jokes : {jokes.length}</h1>
      {
        jokes.map((joke,index) => (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <h2>{joke.content}</h2>
          </div>
        ))
      }
    </>
  )
}

export default App
