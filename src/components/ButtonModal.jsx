import PropTypes from 'prop-types';

import '../styles/components/ButtonModal.css';

const ButtonModal = ({ appLink }) => {
  return (
    <div>
      <a href={appLink} target="_blank" rel="noreferrer" data-testid="link-button">
        <button className="button-modal">ACESSAR</button>
      </a>
    </div>
  );
}

ButtonModal.propTypes = {
  appLink: PropTypes.string,
}

export default ButtonModal;
