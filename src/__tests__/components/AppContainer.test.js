import '@testing-library/jest-dom/extend-expect';

import { render, screen } from '@testing-library/react';

import AppContainer from '../../components/AppContainer';

describe('AppContainer', () => {
  it('render correctly', () => {
    render(<AppContainer />);

    const divContainer = screen.getByTestId('app-container');;

    expect(divContainer).toBeInTheDocument();
  });

  it('render children correctly', () => {
    const childParagraph = '<p>Hello World!</p>';
    render(<AppContainer>{childParagraph}</AppContainer>)

    const divContainer = screen.getByTestId('app-container');

    expect(divContainer).toBeInTheDocument();
    expect(screen.getByText(childParagraph)).toBeInTheDocument();
  });
});
