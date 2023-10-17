import { useState } from 'react';
import Counter from './components/useState/Counter'
import Effect from './components/useEffect/Effect'
import Reducer from './components/useReducer/Reducer'
import Calculator from './components/useReducer/Calculator';
import useEffect1 from './photos/useEffect1.png'
import useEffect2 from './photos/useEffect2.png'
import calc1 from './photos/calc1.png'
import calc2 from './photos/calc2.png'
import calc3 from './photos/calc3.png'
import calc4 from './photos/calc4.png'

function App() {
  const [showEffect, setShowEffect] = useState(false)
  const [showReducer, setShowReducer] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
        Hi
      </header>
      <Counter />
      <>
        <h1>useEffect</h1>
        <p>useEffect is a React Hook that lets you synchronize a component with an external system. 
          This hook uses side effects from actions. Side effects include data fetching, setting up a subscription, 
          and manually changing the DOM in React components. It would be used in a chat room app, to stay connected to an externam system.   </p>
        <h3>Modal 'uses effects'</h3>
        <p>The modal is a perfect illustration of the use Effect hook. Paraphrasing from
          <a href="https://javascript.plainenglish.io/react-modals-can-be-opened-from-useeffect-now-1689f997b284"> this medium article </a>
a state variable tracks whether a modal should be open or closed. The state is updated inside the useEffect hook.
Clicking the open button will update the screen with a modal that has the 2 snippets of code I used to build the modal.
        </p>
        <button onClick={() => setShowEffect(true)}>Show Code
        </button>
        <Effect className="modal" isOpen={showEffect}>
          <h1>useEffect Hook Example</h1>
          <div>
            <img src={useEffect1} width='300' height='300' alt= ''></img>
            <img src={useEffect2} width='300' height='300' alt= ''></img>
          </div>
          <br />
          <button onClick={() =>
            setShowEffect(false)}>Close</button>
        </Effect>
        <br />
        <br />
        <hr></hr>
        <Reducer />
        <hr></hr>
        <Calculator />
        <button onClick={() => setShowReducer(true)}>Show Code
        </button>
        <Effect className="modal" isOpen={showReducer}>
          <h1>useEffect Hook Example</h1>
          <div>
            <img src={calc1} width='150' height='150' alt= ''></img>
            <img src={calc2} width='150' height='150' alt= ''></img>
            <img src={calc3} width='150' height='150' alt= ''></img>
            <img src={calc4} width='150' height='150' alt= ''></img>
          </div>
          <br />
          <button onClick={() =>
            setShowReducer(false)}>Close</button>
        </Effect>

        <hr></hr>
      </>
    </div>
  );
}

export default App;

