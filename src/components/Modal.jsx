import PropTypes from 'prop-types';

import ButtonModal from './ButtonModal';

import '../styles/components/Modal.css';

const Modal = ({ app ,isOpen, onClose, lastVisitedApps }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose} data-testid="modal-overlay">
      <div className="modal-content" onClick={(e) => e.stopPropagation()} data-testid="modal-content">
        <div className="modal-header">
          <div className="modal-icon">
            <img src={app.icon} alt={app.name} style={{ backgroundColor: app.color }} width={246} />
          </div>
          <div className="modal-app-info">
          <h2 data-testid="modal-title">{app.name}</h2>
            <ButtonModal
              appLink={app.link}
            />
          </div>
        </div>
        <div className="last-tools">
          <h2>Últimas ferramentas visualizadas</h2>
          <div className={`last-tools-apps ${lastVisitedApps.length === 3 ? 'three-apps' : ''}`} data-testid="last-tools-apps">
            {lastVisitedApps.map((app, index) => (
              <div className="tools-app-icon" key={index} data-testid="tools-app-icon">
                <img src={app.icon} alt={app.name} style={{ backgroundColor: app.color }} width={145} />
                <h3>{app.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  app: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  lastVisitedApps: PropTypes.array.isRequired,
}

export default Modal;
