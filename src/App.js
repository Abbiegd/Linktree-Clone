import React from "react";
import LinktreePage from "./components/LinktreePage";
import './index.css'; // Importing the CSS file for styling

function App() {
  return (
    <div className="App">
      <div className="container">
        <LinktreePage />  {/* Rendering the LinktreePage component */}
      </div>

      {/* Footer */}
      <footer className="footer">
      <a href="https://www.freepik.com/free-ai-image/digital-art-with-city-landscape-architecture_94154568.htm#fromView=search&term=pixel+anime&track=ais_ai_generated&regularType=ai&page=2&position=6&uuid=44cee52c-c256-4964-ae11-67eeed7ff12f">Image by freepik</a>
      </footer>
    </div>
  );
}

export default App; // Exporting the App component as the entry point of the application