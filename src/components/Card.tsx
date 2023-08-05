interface CardProps {
  value: string;
}

export default function Card({ value }: CardProps) {
  return (
    <li>{value}</li>  
  );
}
