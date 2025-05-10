import React from "react";
import { Outlet } from "react-router-dom";

const Root: React.FC = () => {
  return (
    <div>
      {/* <p>Welcome to the Root Route</p> */}
      <Outlet />
    </div>
  );
};

export default Root;
