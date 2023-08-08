import './Button.css';

interface ButtonProps {
  children: string;
  onClick: () => void;
  className: string;
  isDisabled: string;
}

export default function Button({ children, onClick, className, isDisabled }: ButtonProps) {
  return (
    <button className={className} onClick={onClick} disabled={isDisabled === "disabled"}>
      {children}
    </button>
  );
}
