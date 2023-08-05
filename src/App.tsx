import React from 'react';
//import './App.css';
import { cards } from './utils/cards';
import Table from './components/Table/Table';

function App() {
 console.log(cards);
 return (
    <div className="App">
      <Table />
    </div>
  );
}

export default App;
