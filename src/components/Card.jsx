import PropTypes from 'prop-types';

import '../styles/components/Card.css'

const Card = ({ icon, name, color, onCardClick }) => {
  return (
      <div className='card' onClick={onCardClick}>
        <div className="card-img-container">
          <img src={icon} alt={name} style={{ backgroundColor: color }} />
        </div>
        <div className="card-title">
          <span>{name}</span>
        </div>
      </div>
  );
};

Card.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
}

export default Card;
