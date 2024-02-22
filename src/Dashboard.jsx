import { Routes, Route } from "react-router-dom";

import DashboardUI from "./Pages/Dashboard/Dashboard";
const DashboardRoutesLinks = [
  { name: "home", path: "/", element: <DashboardUI/> },
];

const DashboardRoutes = () => {
  return (
    <div style={{ height: "100%", width: "100%" }}>     
      <div style={{ height: "100%", width: "100%" }}>
        <main>
          <Routes>
            {DashboardRoutesLinks.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default DashboardRoutes;
