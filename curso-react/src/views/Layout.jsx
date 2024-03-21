import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>Header</h1>
        <Outlet />
      <h1>Footer</h1>
    </div>
  );
};

export default Layout;
