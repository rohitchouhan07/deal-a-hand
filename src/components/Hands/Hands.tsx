import { useState } from 'react';
import { cards, HANDSZ } from '../../utils/cards';
import Card from '../Card/Card';

interface Card_ {
  id: number;
  value: string;
}

interface HandProps {
  fiveCards: Card_[];
}

function Hand({fiveCards}: HandProps) {
  return (
    <ul>
      {fiveCards.map(card =>
        <Card key={card.id} value={card.value} />
      )}
    </ul>
  );
}

export default function Hands() {
  const [handList, setHandList] = useState<JSX.Element[]>([]);
  const [cardList, setCardList] = useState<Card_[]>(cards);

  function dealHand() {
    if (cardList.length >= HANDSZ) {
      let newList: Card_[] = [...cardList];
      let fiveCards: Card_[] = [];

      for (var i = 0; i < HANDSZ; i++) {
        console.log(cardList.length);
        let index: number = Math.floor(Math.random() * (newList.length - 1));
        fiveCards.push(newList[index]);
        newList.splice(index, 1);
      }

      setCardList(newList);
      setHandList(handList.concat(<Hand key={newList.length} fiveCards={fiveCards} />)); 
    }
    else {
      alert("No more cards left");
    }
  } 

  return (
    <div>
      <button onClick={dealHand}>Deal hand</button>
      {handList}
    </div>
  );
}
