
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "@pages/App";
import Error from "@pages/Error";
import Home from "@pages/home";
import AboutUs from "@pages/about";
import RoadMap from "@pages/roadmap";
import Stage from "./modules/stage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/road-map",
        element: <RoadMap />
      },
      {
        path: "/about-us",
        element: <AboutUs />
      },
    ],
  },
  Stage
]);

export const Routers = () => {
  return <RouterProvider router={router} />;
}
