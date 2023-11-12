import { useEffect, useState } from "react";
import AppContainer from "./components/AppContainer";
import "./index.css";
import CardList from './components/CardList';
import SearchBar from "./components/SearchBar";
import PageNavigation from "./components/PageNavigation";
import fetchData from "./services/apiService";

const App = () => {
  const [apiData, setApiData] = useState([]);
  const [filteredApps, setFilteredApps] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

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
    setCurrentPage(1);
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const itemsPerPage = 12;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleApps = filteredApps.length > 0 ? filteredApps.slice(startIndex, endIndex) : apiData.slice(startIndex, endIndex);

  return (
    <AppContainer>
      <SearchBar onSearch={handleSearch}/>
      <CardList apps={visibleApps}/>
      <PageNavigation
        currentPage={currentPage}
        totalPages={Math.ceil(filteredApps.length > 0 ? filteredApps.length / itemsPerPage : apiData.length / itemsPerPage)}
        onPageChange={handlePageChange}
      />
    </AppContainer>
  );
}

export default App;
