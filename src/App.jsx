import React from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";

import LoginSignup from "./Pages/LoginSignup/LoginSignup";
import DashboardRoutes from "./Dashboard";

const dynamicRoutes = [
  { name: "Login_Signup", path: "/", component: LoginSignup },
  {
    name: "Dashboard",
    path: "/dashboard/*",
    component: DashboardRoutes,
  },
];

const App = () => {  

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Routes>
        {dynamicRoutes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<route.component {...route.params} />}
          />
        ))}
      </Routes>
      <Outlet />
    </div>
  );
};

export default App;
