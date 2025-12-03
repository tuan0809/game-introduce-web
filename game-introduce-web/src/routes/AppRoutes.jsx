// Router setup 
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import Game from "../pages/Game/Game";
import Support from "../pages/Support/Support";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/game" element={<Game />} />
      <Route path="/support" element={<Support />} />
    </Routes>
  );
} 
 
export default AppRoutes;
