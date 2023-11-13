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

export default CardList;
