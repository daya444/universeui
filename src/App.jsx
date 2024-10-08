import React from "react";
import {Route, Routes } from "react-router-dom";
import OrbitingSubsectors from "./OrbitingSubsectors";
import MobileOrbit from "./MobileOrbit";
import Practice from "./Practice";
import Homepage from "./Homepage";
import CurvedLineUp from "./CurvedLineUp";
import StartupInfo from "./StartupInfo";
import Usecases from "./Usecases";
import { Ecosystem } from "./EcoSystem";

const App = () => {
  return (
      <div>
        <Routes>
          <Route path="/" exact element={<Homepage/>}/>
          <Route path="/orbiting-subsectors" element={<OrbitingSubsectors />} />
          <Route path="/mobile-orbit" element={<MobileOrbit />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/curved-lineup" element={<CurvedLineUp/>}/>
          <Route path="/startup-info" element={<StartupInfo />} />
          <Route path="/ecosystem" element={<Ecosystem />} />
        </Routes>
      </div>
  );
};

export default App;
