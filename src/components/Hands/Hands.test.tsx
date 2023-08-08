import React from 'react'; 
import { render, fireEvent } from '@testing-library/react';
import Hands from './Hands';

jest.mock('../Card/Card', () => {
  return ({ value }: { value: string }) => (
    <li data-testid="card-component">
      <img src={`/images/${value}.svg`} alt={value} />
    </li>
  );
});

describe('Hands component', () => {
  test('renders without errors', () => {
    const { container } = render(<Hands />);
    expect(container).toBeInTheDocument();
  });

  test('initial state is set correctly', () => {
    const { getByText } = render(<Hands />);
    const buttonElement = getByText('Deal a hand');

    expect(buttonElement).toHaveClass('button1');
    expect(buttonElement).not.toHaveAttribute('enabled');
  });

  test('deals a hand correctly when there are enough cards', () => {
    const { getByText, getAllByTestId } = render(<Hands />);
    const buttonElement = getByText('Deal a hand');

    // Mock Math.random to always return 0.5
    jest.spyOn(Math, 'random').mockReturnValue(0.5);

    fireEvent.click(buttonElement);

    // Check if five cards are rendered after dealing a hand
    const cardsInHand = getAllByTestId('card-component');
    expect(cardsInHand.length).toBe(5);
  });
});

