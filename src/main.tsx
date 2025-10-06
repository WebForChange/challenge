import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootRoute from "./routes/RootRoute.tsx";
import CustomChallengeRoute from "./routes/CustomChallengeRoute.tsx";
import ErrorPage from "./ErrorPage.tsx";
import "./index.css";
import Home from "./components/Home.tsx";
import CustomChallenge from "./components/CustomChallenge.tsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootRoute />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
      },
    ],
  },
  {
    path: "/custom-challenge",
    element: <CustomChallengeRoute />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/custom-challenge",
        element: <CustomChallenge />,
        errorElement: <ErrorPage />,
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
