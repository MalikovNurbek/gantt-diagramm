import React from "react";
import Diagramm from "./components/Diagramm/Diagramm";
import DataModal from "./components/Modal/Modal";
import Sidebar from "./components/Sidebar/Sidebar";
import './App.css'
function App() {
  return (
    <div className="appContainer">
      <DataModal />
      <Sidebar />
      <Diagramm />
    </div>
  );
}

export default App;
