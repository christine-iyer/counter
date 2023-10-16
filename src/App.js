import { useState } from 'react';
import Counter from './components/Counter'
import ModalDialogue from './components/ModalDialogue'
import Reducer from './components/Reducer'
import Calculator from './components/useReducer/Calculator';
function App() {
  const [show, setShow] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
        Hi
      </header>
      <Counter />
      <>
        <button onClick={() => setShow(true)}>Open
        </button>
        <ModalDialogue className= "modal" isOpen={show}>
          <h1> The app in a modal</h1>
         
          <Counter width='100px' />
          <br />
          <button onClick={() => 
            setShow(false)}>Close</button>
        </ModalDialogue>
        <br />
        <br />
        <hr></hr>
        <Reducer />
        <hr></hr>
        <Calculator />
        <br />
        <br />
        <hr></hr>

      </>
      
    </div>
    

  );
}

export default App;

