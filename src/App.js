import { useState } from 'react';
import Counter from './components/Counter'
import Effect from './components/Effect'
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
      <h1>useEffect</h1>
      <h3>Modal 'uses effects'</h3>
        <button onClick={() => setShow(true)}>Open
        </button>
        <Effect className="modal" isOpen={show}>
          <h1>useEffect Hook Example</h1>
          <p>The modal is a perfect illustration of the use Effect hook.</p>
          <br />
          <button onClick={() =>
            setShow(false)}>Close</button>
        </Effect>






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

