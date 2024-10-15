import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import NotAllowedCapturePage from "./pages/NotAllowedCapturePage"; // Import NotAllowedCapturePage
import "./App.css";

function App() {
  const [isNotAllowedVisible, setIsNotAllowedVisible] = useState(false);

  // Function to toggle the Not Allowed Capture Page
  const toggleNotAllowedCapturePage = () => {
    setIsNotAllowedVisible(!isNotAllowedVisible);
  };

  return (
    <div className="relative">
      {/* Navbar with button that opens the Not Allowed Capture Page */}
      <Navbar onIconClick={toggleNotAllowedCapturePage} />

      {/* Outlet to load the current route's page */}
      <Outlet />

      {/* Conditionally render NotAllowedCapturePage */}
      {isNotAllowedVisible && <NotAllowedCapturePage isVisible={isNotAllowedVisible} />}
    </div>
  );
}

export default App;
