import { useState } from 'react';


import Header from './components/Header/Header.jsx';
import { CoreConcepts } from './components/CoreConcepts.jsx';
import { Examples } from './components/Examples.jsx';

function App() {
  

  console.log('APP COMPONENT EXECUTING');

 

  return (
    <div>
      <Header />
      <main>
        <CoreConcepts></CoreConcepts>
        <Examples></Examples>
      </main>
    </div>
  );
}

export default App;
