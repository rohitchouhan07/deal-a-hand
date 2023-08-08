import "./Card.css";

interface CardProps {
  value: string;
}

export default function Card({ value }: CardProps) {
  return (
    <li>
      <img src={`/images/${value}.svg`} alt={value} />
    </li>
  );
}

// images taken from - https://tekeye.uk/playing_cards/svg-playing-cards

