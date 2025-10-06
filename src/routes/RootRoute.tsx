import React from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";

const RootRoute: React.FC = () => {
  return (
    <div>
      {/* <p>Welcome to the Root Route</p> */}
      <Outlet />
      <Toaster />
    </div>
  );
};

export default RootRoute;
