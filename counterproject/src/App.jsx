import { useState } from 'react';
import './App.css';

function App() {

  //This React hook is used to change the state
  //we have taken default value 15 you can take any true ,01, even function
  //setCounter is method/convention which is responsible for updation of counter variable you can name it accordingly
  //default value in the variable will be 15
  let [counter, setCounter] = useState(15)

  const addValue = () =>{
    
    counter = counter + 1;
    setCounter(counter)
    console.log("clicked", counter);
  }

  const removeValue = () =>{
    
    counter = counter - 1;
    setCounter(counter)
    console.log("clicked", counter);
  }

  return (
    <>
    <h1>My Counter</h1>
    <h2>Counter Value: {counter}</h2>

    <button onClick={addValue}>Add value</button>
    <br />
    <button onClick={removeValue}>Remove Value</button>
    <p>change: {counter}</p>
    </>
  )
}

export default App
