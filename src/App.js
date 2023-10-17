import { useState } from 'react';
import Counter from './components/Counter'
import Effect from './components/Effect'
import Reducer from './components/Reducer'
import Calculator from './components/useReducer/Calculator';
import useEffect1 from './photos/useEffect1.png'
import useEffect2 from './photos/useEffect2.png'
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
        <p>The modal is a perfect illustration of the use Effect hook. Paraphrasing from
          <a href="https://javascript.plainenglish.io/react-modals-can-be-opened-from-useeffect-now-1689f997b284"> this medium article </a>
a state variable tracks whether a modal should be open or closed. The state is updated inside the useEffect hook.
Clicking the open button will update the screen with a modal that has the 2 snippets of code I used to build the modal.
        </p>
        <button onClick={() => setShow(true)}>Open
        </button>
        <Effect className="modal" isOpen={show}>
          <h1>useEffect Hook Example</h1>
          <div>
            <img src={useEffect1} width='300' height='300'></img>
            <img src={useEffect2} width='300' height='300'></img>
          </div>
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

