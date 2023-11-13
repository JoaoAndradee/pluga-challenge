import { useEffect, useState } from "react";

import AppContainer from "../components/AppContainer";
import CardList from '../components/CardList';
import Modal from "../components/Modal";
import PageNavigation from "../components/PageNavigation";
import SearchBar from "../components/SearchBar";
import fetchData from "../services/apiService";

import "../styles/index.css";

const Home = () => {
  const [apiData, setApiData] = useState([]);
  const [filteredApps, setFilteredApps] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedApp, setSelectedApp] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lastVisitedApps, setLastVisitedApps] = useState([]);

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

  const handleOpenModal = (app) => {
    setSelectedApp(app);
    setIsModalOpen(true);

    const isAppInList = lastVisitedApps.some((visitedApp) => visitedApp.app_id === app.app_id);

    if (!isAppInList) {
    const updatedVisitedApps = [...lastVisitedApps, app].slice(-3);
    setLastVisitedApps(updatedVisitedApps);
    }
  }

  const handleCloseModal = () => {
    setSelectedApp(null);
    setIsModalOpen(false);
  }

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
      <CardList
        apps={visibleApps}
        onOpenModal={handleOpenModal}
      />
      <PageNavigation
        currentPage={currentPage}
        totalPages={Math.ceil(filteredApps.length > 0 ? filteredApps.length / itemsPerPage : apiData.length / itemsPerPage)}
        onPageChange={handlePageChange}
      />
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        app={selectedApp}
        lastVisitedApps={lastVisitedApps}
      />
    </AppContainer>
  );
}

export default Home;
