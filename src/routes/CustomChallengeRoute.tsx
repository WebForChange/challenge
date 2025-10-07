import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";

const CustomChallengeRoute: React.FC = () => {
    return (
        <div>
            {/* Custom Challenge Route where user enters their personal challenge */}
            <Outlet />
            <Toaster />
        </div>
    );
};

export default CustomChallengeRoute;
