import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import SearchBar from '../../components/SearchBar';

describe('SearchBar', () => {

  const mockOnSearch = jest.fn();

  it('renders correctly', () => {
    render(<SearchBar onSearch={mockOnSearch} />);

    const elementSearch = screen.getByTestId('search-bar');

    expect(elementSearch).toBeInTheDocument();
  });

  it('update internal state', () => {
    render(<SearchBar onSearch={mockOnSearch} />);

    const elementSearch = screen.getByTestId('search-bar');
    const searchTerm = 'hotmart';

    fireEvent.change(elementSearch, { target: { value: searchTerm}});

    expect(elementSearch.value).toBe(searchTerm);
  });
});
