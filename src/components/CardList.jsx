import Card from "./Card";
import '../styles/components/CardList.css';

const CardList = ({ apps }) => {
  return (
    <div className="card-list">
      {apps.map((app, index) => (
          <Card
            key={index}
            icon={app.icon}
            name={app.name}
            color={app.color}
          />
          ))
        }
    </div>
  );
}

export default CardList;
