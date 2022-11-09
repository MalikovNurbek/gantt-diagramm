import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Diagramm from "./components/Diagramm/Diagramm";
import './App.css'

function App() {
  const [isLineActive, setIsLineActive] = React.useState<boolean>(false);

  return (
    <div className="appContainer">
      <Sidebar isLineActive={isLineActive} setIsLineActive={setIsLineActive}/>
      <Diagramm isLineActive={isLineActive}/>
    </div>
  );
}

export default App;
