import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Card from '../../components/Card';
import mockCardProps from '../../mocks/cardMock';

describe('Card component', () => {
  test('renders correctly', () => {
    render(<Card {...mockCardProps} />);
    const card = screen.getByTestId('card');
    expect(card).toBeInTheDocument();
  });

  test('renders card name correctly', () => {
    render(<Card {...mockCardProps} />);
    const cardNameElement = screen.getByText(mockCardProps.name);
    expect(cardNameElement).toBeInTheDocument();
  });

  test('renders card icon correctly', () => {
    render(<Card {...mockCardProps}/>);
    const cardIconElement = screen.getByTestId('card-icon');
    expect(cardIconElement).toBeInTheDocument();
  });

  test('calls onCardClick when clicked', () => {
    render(<Card {...mockCardProps} />);
    const cardElement = screen.getByTestId('card');
    fireEvent.click(cardElement);
    expect(mockCardProps.onCardClick).toHaveBeenCalled();
  });
});
