// eslint-disable-next-line no-unused-vars
import './App.jsx'; // Ensure this file exists in the src directory
import Regved from './regved.jsx';

function App() {
  //can also inject variable like below {username}
  const username = "regved" //variable declaration
  return (
    //<h1>Elon Musk || Regved Pande</h1>(commented out as i am experimenting with regved.js);
    //in jsx only one enclosing tag is allowed </> not two so div can be used you can use it as like <div></div> or <></>
    //In react we can call this thing fragments
    <>
    <Regved/>
    {/* thing thing wont work outside those <></> */}
    
    <h1>Universe {username}</h1> 
    </>

  );
}

export default App;
