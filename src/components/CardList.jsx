import PropTypes from 'prop-types';
import Card from "./Card";
import '../styles/components/CardList.css';

const CardList = ({ apps, onOpenModal }) => {
  return (
    <div className="card-list">
      {apps.map((app, index) => (
          <Card
            key={index}
            icon={app.icon}
            name={app.name}
            color={app.color}
            onCardClick={() => onOpenModal(app)}
          />
          ))
        }
    </div>
  );
}

CardList.propTypes = {
  apps: PropTypes.arrayOf(PropTypes.object).isRequired,
  onOpenModal: PropTypes.func.isRequired,
}

export default CardList;
