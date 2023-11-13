import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import mockPageNavigationMock from '../../mocks/pageNavigationMock';
import PageNavigation from '../../components/PageNavigation';

describe('PageNavigation', () => {
  it('renders correctly', () => {
    render(<PageNavigation {...mockPageNavigationMock} />);

    const elementPageNavigation = screen.getByTestId('page-navigation');

    expect(elementPageNavigation).toBeInTheDocument();
  });

  it('renders correctly with 4 pages', () => {
    render(<PageNavigation {...mockPageNavigationMock} />);

    const elementPageNavigationItems = screen.getAllByTestId('page-navigation-item');
    expect(elementPageNavigationItems).toHaveLength(4);

    elementPageNavigationItems.forEach((page, index) => {
      expect(page).toHaveTextContent((index + 1).toString());
    });
  })

  it('calls onPageChange when a page item is clicked', () => {
    render(<PageNavigation {...mockPageNavigationMock} />);

    const elementPageNavigationItem = screen.getAllByTestId('page-navigation-item')[2];

    fireEvent.click(elementPageNavigationItem);

    expect(mockPageNavigationMock.onPageChange).toHaveBeenCalled();
    expect(elementPageNavigationItem).toHaveTextContent('3');
  });

});
