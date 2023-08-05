import { useState } from 'react';
import { cards } from '../utils/cards';
import Card from './Card';

interface Card_ {
  id: number;
  value: string;
}

function Hand() {
  let handList: Card_[] = [];
  for (var i = 0; i < 5; i++) {
    let index: number = Math.floor(Math.random() * (cards.length - 1));
    handList.push(cards[index]);
    cards.splice(index, 1);
  }
  return (
    <ul>
      {handList.map(card =>
        <Card key={card.id} value={card.value} />
      )}
    </ul>
  );
}

export default function Hands() {
  const [handList, setHandList] = useState<JSX.Element[]>([]);

  function dealHand() {
    if (cards.length > 5) {
      setHandList(handList.concat(<Hand key={cards.length}/>)); 
    }
  } 

  return (
    <div>
      <button onClick={dealHand}>Deal hand</button>
      {handList}
    </div>
  );
}
