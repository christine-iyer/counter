import React, { useState, useReducer } from "react";
// initial component state

const initialState = { count: 0 };
// string constatnts
const ACTIONS = {
     DECREMENT: "decrement",
     INCREMENT: "increment",
     DOUBLE: "double",
     DIVIDE3: "divide3",
     ROUND: "round"


};
// (currentState,actionObject)=> newState
function reducer(state, action) {
     switch (action.type) {
          case "increment":
               return { count: state.count + 1 };
          case "decrement":
               return { count: state.count - 1 };
          case "double":
               return { count: state.count * 2 };
          case "divide3":
               return { count: (state.count / 3).toFixed(2) };
          case "round":
               return { count: Math.round(state.count) };
          default:
               throw new Error();
     }
}

export default function ToDoList() {
     const [count, setCount]=useState({
          count:0

     })
     const handleChange = (event)=> {
          setCount({...count, [event.target.name]: event.target.value})
     }
     const [state, dispatch] = useReducer(reducer, initialState);
     return (
          <>
               {'Starting Number '}<input value={count.count} type='number' onChange={handleChange} name="count"></input><br />
               <span>Count: {state.count}</span>
               <button onClick={() =>
                    dispatch({ type: ACTIONS.INCREMENT })}>
                    increment
               </button>
               <button onClick={() => {
                    dispatch({ type: ACTIONS.DECREMENT })
               }}>
                    decrement
               </button>
               <button onClick={() => {
                    dispatch({ type: ACTIONS.DOUBLE })
               }}>
                    double
               </button>
               <button onClick={() => {
                    dispatch({ type: ACTIONS.DIVIDE3 })
               }}>
                    divide by 3
               </button>
               <button onClick={() => {
                    dispatch({ type: ACTIONS.ROUND })
               }}>
                    round
               </button>
          </>
     );
}