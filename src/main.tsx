import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootRoute from "./routes/RootRoute";
import CustomChallengeRoute from "./routes/CustomChallengeRoute";
import ErrorPage from "./ErrorPage";
import "./index.css";
import Home from "./components/Home";
import CustomChallenge from "./components/CustomChallenge";

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
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
