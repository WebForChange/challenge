import React from "react";
import { START_BTN_LABEL, WEBSITE_TITLE } from "../utils/constants";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="">

      <div className="flex bg-gray-100 flex-col w-full mx-auto items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-8 text-red border-dashed">
          {WEBSITE_TITLE.split(" ").map((word, index) => (
            <div key={index} className="my-1">
              {word}
            </div>
          ))}
        </h1>

        <Link to="/custom-challenge">
          <Button>{START_BTN_LABEL}</Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
