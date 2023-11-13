import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Modal from '../../components/Modal';
import modalMock from '../../mocks/modalMock';

describe('Modal', () => {
  it('renders correctly modalOverlay and modalContent when isOpen is true', () => {
    render(<Modal {...modalMock } isOpen={true} />)

    const modalOverlay = screen.getByTestId('modal-overlay');
    const modalContent = screen.getByTestId('modal-content');

    expect(modalOverlay).toBeInTheDocument();
    expect(modalContent).toBeInTheDocument();
  });

  it('does not render modalOverlay and modalContent when isOpen is false', () => {
    render(<Modal {...modalMock} />);

    const modalOvarlayOff = screen.queryByTestId('modal-overlay');
    const modalContent = screen.queryByTestId('modal-content');

    expect(modalOvarlayOff).not.toBeInTheDocument();
    expect(modalContent).not.toBeInTheDocument();
  });

  it('renders correctly modalContent with the correct title', () => {
    render(<Modal {...modalMock} isOpen={true} />);

    const modalTitle = screen.getByTestId('modal-title');

    expect(modalTitle).toHaveTextContent(modalMock.app.name);
  });

  it('render lastTools correctly', () => {
    render(<Modal {...modalMock} isOpen={true} />);

    const lastTools = screen.getByTestId('last-tools-apps');

    expect(lastTools).toBeInTheDocument();
  });

  it('render lastTools Apps correctly', () => {
    render(<Modal {...modalMock} isOpen={true} />);

    const lastToolsApps = screen.getAllByTestId('tools-app-icon');

    expect(lastToolsApps).toHaveLength(modalMock.lastVisitedApps.length);
  });
});
