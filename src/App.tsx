import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Diagramm from "./components/Diagramm/Diagramm";
import './App.css'

function App() {
  return (
    <div className="appContainer">
      <Sidebar />
      <Diagramm />
    </div>
  );
}

export default App;
