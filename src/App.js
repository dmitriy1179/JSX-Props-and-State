import React from 'react';
import './App.css';
import Counter from "./counter"
import Accordion from "./accordion"

function App() {
  return (
    <div className="App">
      <Accordion>
        <div>
          Accordion
        </div>
        <Counter step={5} initialCount={10}/>
      </Accordion>
    </div>
  );
}

export default App;
