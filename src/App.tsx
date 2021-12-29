import React from 'react'
import Maps from './maps'
import './App.css';
import HoverCounter from './HoverCounter';

import ClickCounter from './count';
import CounterFinal from './Counterfinal';

function App() {
  return (
    <div>
      <Maps />
      <ClickCounter />
      <HoverCounter />
      <CounterFinal />
    </div>
  )
}

export default App
