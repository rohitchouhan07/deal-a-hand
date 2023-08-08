import { useState } from "react";
import { cards, HANDSZ } from "../../utils/cards";
import Card from "../Card/Card";
import Button from "../Button/Button";

interface Card_ {
  id: number;
  value: string;
}

interface HandProps {
  fiveCards: Card_[];
  className: string;
}

function Hand({ fiveCards, className }: HandProps) {
  return (
    <ul className={className}>
      {fiveCards.map((card) => (
        <Card key={card.id} value={card.value} />
      ))}
    </ul>
  );
}

export default function Hands() {
  const [handList, setHandList] = useState<JSX.Element[]>([]);
  const [cardList, setCardList] = useState<Card_[]>(cards);
  const [isDisabled, setIsDisabled] = useState<string>("enabled");

  function dealHand() {
    if (cardList.length >= HANDSZ) {
      let newList: Card_[] = [...cardList];
      let fiveCards: Card_[] = [];

      for (var i = 0; i < HANDSZ; i++) {
        let index: number = Math.floor(Math.random() * (newList.length - 1));
        fiveCards.push(newList[index]);
        newList.splice(index, 1);
      }

      setCardList(newList);
      setHandList(
        handList.concat(
          <Hand
            className="animated-ul"
            key={newList.length}
            fiveCards={fiveCards}
          />,
        ),
      );
    } else {
      setIsDisabled("disabled");
      alert("No more cards left");
    }
  }

  return (
    <div className="center-align">
      <Button className="button1" isDisabled={isDisabled} onClick={dealHand}>
        Deal a hand
      </Button>
      <div className="wrapper">
        <div className="flex-container">{handList}</div>
      </div>
    </div>
  );
}

