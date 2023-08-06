import './Button.css';

interface ButtonProps {
  children: string;
  onClick: () => void;
  className: string;
}
export default function Button({ children, onClick, className }: ButtonProps) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
