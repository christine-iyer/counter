import React, { useState } from 'react'
import state from '../photos/state.png'

export default function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1> What is a hook?</h1>
      <p>A React hook is a special took that gains you access to special features in the package which make an app interactive with the user. Each section gives an explanation and use case of useful hooks.</p>
      <hr></hr>
      <h1>useState</h1>
      <p> The useState hook lets you add state, i.e., bring life to, functional components.</p>
      <h3>Click Counter app that 'uses state'</h3>
      <div style={{ borderStyle: "solid", borderColor: 'yellow', width: '100px', padding: '10px', margin: '10px'}}>
      <p>you clicked {count} times</p>
      <button style={{color: 'ThreeDHighlight', backgroundColor: 'yellow'}}onClick={() => setCount(count + 1)}> Click</button>
    </div>
      <p>The snippet below brings the button to life using state. Every time a user clicks the button, a display updates thee count of clicks. </p>
      
    <div>
<img src={state}  alt="" width='500'/>
    </div>

    {/* <h1>Migrating to TypeScript</h1>
    <p>I have the code saved in a file in this folder, but it does not render. Here is the text of the error...</p>
<code>Module not found: Error: Can't resolve './components/CounterTS' in '/Users/christineiyer/Documents/self-guided-learning/counter/src'</code>
<br></br>
<aside>Steps to open a FrontEnd Masters TS app. Clone ts repo...</aside>
<br></br>
<code>npm install</code>
<br></br>
<code>npm i react-scripts</code> */}
  </div>
  )
}

