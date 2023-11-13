import '../styles/components/Modal.css';
import ButtonModal from './ButtonModal';

const Modal = ({ app ,isOpen, onClose, lastVisitedApps }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-icon">
            <img src={app.icon} alt={app.name} style={{ backgroundColor: app.color }} width={246} />
          </div>
          <div className="modal-app-info">
          <h2>{app.name}</h2>
            <ButtonModal
              appLink={app.link}
            />
          </div>
        </div>
        <div className="last-tools">
          <h2>Últimas ferramentas visualizadas</h2>
          <div className={`last-tools-apps ${lastVisitedApps.length === 3 ? 'three-apps' : ''}`}>
            {lastVisitedApps.map((app, index) => (
              <div className="tools-app-icon" key={index}>
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

export default Modal;
