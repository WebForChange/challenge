import React from "react";
import { START_BTN_LABEL, WEBSITE_TITLE } from "../utils/constants";
import { Button } from "@/components/ui/button";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">
        {WEBSITE_TITLE.split(" ").map((word, index) => (
          <div key={index} className="my-1">
            {word}
          </div>
        ))}
      </h1>
      <Button>{START_BTN_LABEL}</Button>
    </div>
  );
};

export default Home;
