import '@testing-library/jest-dom/extend-expect';

import { fireEvent, render, screen } from "@testing-library/react"
import CardList from "../../components/CardList"
import mockApps from "../../mocks/apiMock"

describe('CardList', () => {

  const mockOnOpenModal = jest.fn();

  it("renders correctly", () => {
    render(<CardList apps={mockApps} onOpenModal={mockOnOpenModal} />);

    const cardElements = screen.getAllByTestId("card");

    expect(cardElements).toHaveLength(cardElements.length);
  })

  test('renders CardList correctly with empty apps', () => {
    render(<CardList apps={[]} onOpenModal={mockOnOpenModal} />);

    const cardElements = screen.queryAllByTestId('card');

    expect(cardElements).toHaveLength(0);
  });

  test('calls onCardClick when a card is clicked', () => {
    render(<CardList apps={mockApps} onOpenModal={mockOnOpenModal} />);

    const cardElements = screen.getAllByTestId('card');
    fireEvent.click(cardElements[0]);

    expect(mockOnOpenModal).toHaveBeenCalledWith(mockApps[0]);
  });
})
