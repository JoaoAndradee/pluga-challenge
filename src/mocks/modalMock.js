import cardMock from './cardMock';
import apiMock from './apiMock';

const modalMock = {
  app: {...cardMock},
  isOpen: false,
  onClose: jest.fn(),
  lastVisitedApps: apiMock,
}

export default modalMock;
