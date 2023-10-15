import React, { useState } from 'react'
import state from '../photos/state.png'

export default function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div>
      
      <h1> What is a hook?</h1>
      <p>A React hook is a special took that gains you access to special features in the package which make an app interactive with the user. .</p>
      <h1>useState</h1>
      <p> The useState hook lets you add state, i.e., bring life to, functional components.</p>
      <h3>Component that 'uses state'</h3>
      <p>The snippet below brings the button to life using state. Every time a user clicks the button, a display updates thee count of clicks. </p>
      <div style={{ borderStyle: "solid", borderColor: 'yellow', width: '100px', padding: '10px', margin: '10px'}}>
      <p>you clicked {count} times</p>
      <button style={{color: 'ThreeDHighlight', backgroundColor: 'yellow'}}onClick={() => setCount(count + 1)}> Click</button>
    </div>
    <div>

      <img src={state}  alt="" width='500'/>
    </div>
  </div>
  )
}

