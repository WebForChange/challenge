import { START_BTN_LABEL, WEBSITE_TITLE } from "../utils/constants";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="flex page-background flex-col w-full mx-auto items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-red-600 border-dashed">
        {WEBSITE_TITLE.split(" ").map((word) => (
          <div key={word} className="my-1">
            {word}
          </div>
        ))}
      </h1>

      <Link to="/custom-challenge">
        <Button>{START_BTN_LABEL}</Button>
      </Link>
    </div>
  );
};

export default Home;
