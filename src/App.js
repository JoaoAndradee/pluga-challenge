import { Route, Routes } from "react-router";

import Home from "./pages/Home";

import "./styles/index.css";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
