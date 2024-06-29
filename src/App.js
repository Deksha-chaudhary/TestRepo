import logo from './logo.svg';
import './App.css';
import btnModule from "./Button.module.css"
import { useState } from 'react';

function App() {
  let[status,setStatus]=useState(false);
  let[pstatus,setPstatus]=useState(false)
  let[menustatus,setmenustatus]=useState(false)
  return (
    <div className="App">

      <button className='micon'onClick={()=>setmenustatus(!menustatus)}>&#776;</button>
<div className={`menu ${menustatus ?'activemenu':''}`}>
  <ul>
    <li>Home</li>
    <li>About</li>
    <li>Cntact</li>
    <li>Course</li>
    <li>GAllery</li>
  </ul>

</div>


<input type={pstatus?'text':'password'}/>
<button onClick={()=>setPstatus(!pstatus)}>
{pstatus?'hide':'show'}
  </button>
<br/>
      <button className={btnModule.error}>error</button>
      <button className={btnModule.warning}>warning</button>
      <button onClick={()=>setStatus(!status)}>
        {(status)?'hide':'show'}
      </button>
      
      {(status)? <p className='pera'>welcome to world</p>:''}           

      
    </div>
  );
}

export default App;
