import '@testing-library/jest-dom/extend-expect';

import ButtonModal from '../../components/ButtonModal';
import { render, screen } from '@testing-library/react';

describe('ButtonModal', () => {

  const appLink = 'https://medaavaga.com.br';

  it('renders correctly', () => {
    render(<ButtonModal appLink={appLink} />);

    const linkButton = screen.getByTestId('link-button');

    expect(linkButton).toBeInTheDocument();
  });

  it('renders linkButton with the correct link', () => {
    render(<ButtonModal appLink={appLink} />);

    const linkButton = screen.getByTestId('link-button');

    expect(linkButton).toHaveAttribute('href', appLink);
  });

});
