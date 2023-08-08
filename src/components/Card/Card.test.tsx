import { render } from '@testing-library/react';
import Card from './Card';

describe('Card component', () => {
  test('renders with correct image src and alt attributes', () => {
    const value = 'diamonds_Ace';

    const { getByAltText } = render(<Card value={value} />);

    const imageElement = getByAltText(value);

    expect(imageElement).toBeInTheDocument();
    expect(imageElement.getAttribute('src')).toBe(`/images/${value}.svg`);
  });
});

