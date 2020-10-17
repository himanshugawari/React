import React from 'react';
import './App.css';

import Greet from './components/Greet';
import Welcome from './components/Welcome';
// import Hello from './components/Hello';

function App() {
  return (
    <div className='App'>
      <Greet name='Bruce' heroName='Batman'>
        <p>This is children props</p>
      </Greet>
      <Greet name='Clark' heroName='Siperman'>
        <button>Action</button>
      </Greet>
      <Greet name='Diana' heroName='Wonder Woman' />
      <Welcome name='Bruce' heroName='Batman'>
        <p>This is children props</p>
      </Welcome>
      <Welcome name='Clark' heroName='Siperman'>
        <button>Action</button>
      </Welcome>
      <Welcome name='Diana' heroName='Wonder Woman' />
      {/* <Hello /> */}
    </div>
  );
}

export default App;
