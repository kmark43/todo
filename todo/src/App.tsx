import React, { useState } from 'react';
import './App.css';
import { Button } from './components/Button';
import { Greet } from './components/Greet';

function App() {
  let [isToggled, setToggle] = useState(false)

  function toggle() {
    setToggle(!isToggled);
  }

  function renderToggled() {
    return <Button onClick={toggle}>{isToggled ? 'untoggle' : 'toggle'}</Button>
  }

  return (
    <div className="App">
      <Greet name="World">
        <p>Child component</p>
      </Greet>
      {renderToggled()}
    </div>
  );
}

export default App;
