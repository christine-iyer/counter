import { useReducer } from 'react';

function reducer(state, action) {
  if (action.type === 'incremented_age') {
    return {
      age: state.age + 1
    };
  }
  throw Error('Unknown action.');
}

export default function Reducer() {
  const [state, dispatch] = useReducer(reducer, { age: 42 });

  return (
    <>
    <div>
     <h1>useReducer</h1>
     <p>the useReducer function adds state to components, in the same way that useState does, </p>
    </div>
    <h3>Age Incrementer App that 'uses a reducer'</h3>
<div style={{ borderStyle: "solid", borderColor: 'yellow', width: '100px', padding: '10px', margin: '10px'}}>
      <button onClick={() => {
        dispatch({ type: 'incremented_age' })
      }}>
        Increment age
      </button>
      <p>Hello! You are {state.age}.</p>
      </div>
    </>
  );
}
