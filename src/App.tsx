import React from 'react';
//import './App.css';
import { cards } from './utils/cards';
import Hands from './components/Hands';

function App() {
 console.log(cards);
 return (
    <div className="App">
      <Hands />
    </div>
  );
}

export default App;
