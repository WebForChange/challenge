import React from "react";
import { Outlet } from "react-router-dom";

const CustomChallengeRoute: React.FC = () => {
    return (
        <div>
            {/* Custom Challenge Route where user enters their personal challenge */}
            <Outlet />
        </div>
    );
};

export default CustomChallengeRoute;
