import './App.css';
import Card from './components/Card';

function App() {
  let myObj = {
    username: "Regved",
    age: 23
  }
  let newArr = [1, 2, 3]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Card username="regved" btnText="click me"/>
      <Card username="ayush" btnText="click me"/>
    </>
  );
}

export default App;
