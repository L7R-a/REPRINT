// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
// import "primereact/resources/themes/saga-blue/theme.css"; 
import "primereact/resources/themes/soho-dark/theme.css"; 
import "./index.css";
import Gallery from "./pages/Gallery";
import QueryTool from "./components/QueryTool";
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './App.css';



const Main = () => {
  return <Home />;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/query-tool" element={<QueryTool />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
