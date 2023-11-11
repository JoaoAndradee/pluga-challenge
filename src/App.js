import { useEffect, useState } from "react";
import AppContainer from "./components/AppContainer";
import "./index.css";
import CardList from './components/CardList';
import SearchBar from "./components/SearchBar";
import fetchData from "./services/apiService";

const App = () => {
  const [apiData, setApiData] = useState([]);
  const [filteredApps, setFilteredApps] = useState([]);

  useEffect(() => {
    const fetchApiData = async () => {
      try {
        const data = await fetchData();
        setApiData(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchApiData();
  }, []);

  const handleSearch = (term) => {
    const filteredApp = apiData.filter((app) => {
      return app.name.toLowerCase().includes(term.toLowerCase());
    });
    setFilteredApps(filteredApp);
  }

  return (
    <AppContainer>
      <SearchBar onSearch={handleSearch}/>
      <CardList apps={filteredApps.length > 0 ? filteredApps : apiData }/>
    </AppContainer>
  );
}

export default App;
