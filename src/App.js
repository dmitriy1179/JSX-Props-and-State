import React from 'react';
import './App.css';
import Counter from "./counter"
import Accordion from "./accordion"
import FakeLoader from "./fakeLoader"
import InputNotification from "./inputNotification"
import StopWatch from "./stopWatch"
import NewNotification from "./newNotification"
import Resizer from "./resizer"

function App() {
  return (
    <div className="App">
      <Accordion>
        <div>
          Accordion
        </div>
        <Counter step={5} initialCount={10}/>
      </Accordion>
      <FakeLoader delay={1000} text="SUCCESS"/>
      <InputNotification delay={2000}/>
      <NewNotification delay={1000}/>
      <StopWatch/>
      <Resizer/>
    </div>
  );
}

export default App;
