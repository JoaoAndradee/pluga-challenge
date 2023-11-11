import { useEffect, useState } from "react";
import Card from "./Card";
import '../styles/components/CardList.css';

const CardList = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    fetch('https://pluga.co/ferramentas_search.json')
      .then(response => response.json())
      .then(data => setApiData(data))
      .catch(error => console.error('Erro ao obter os dados da API:', error));
  }, []);

  return (
    <div className="card-list">
      {apiData.map((tool, index) => (
          <Card
            key={index}
            icon={tool.icon}
            name={tool.name}
            color={tool.color}
          />
          ))
        }
    </div>
  );
}

export default CardList;
