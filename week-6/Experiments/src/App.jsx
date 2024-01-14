import { useMemo, useState  } from "react"

function App() {
  const [count, setCount] = useState(0);
  const [inputValue,setInputValue] = useState(1);

  let ans = useMemo(()=> {
    let sum = 0;
    for(let i = 1; i <= inputValue; i++){
      sum += i;
    }
    return sum;
  },[inputValue]);
  

  return (
    <>
    <input type="number" onChange={(e) => {
      setInputValue(e.target.value)
    }} />
    <br />
    <h1>Sum is {ans}</h1>
    <button onClick={() => setCount(count+1)}>Counter ({count})</button>
    </>
  )
}


export default App
