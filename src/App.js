import { useState } from 'react';
import Counter from './components/Counter'
import ModalDialogue from './components/ModalDialogue'
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
        <ModalDialogue isOpen={show}>
          Hi
          <br />
          <button onClick={() => 
            setShow(false)}>Close</button>
          
        </ModalDialogue>
      </>
      
    </div>
    

  );
}

export default App;

