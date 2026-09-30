import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const CV = lazy(() => import("../pages/CV"));

const routes = [
  {
    path: "",
    element: <Home />,
    name: "Home",
  },
  {
    path: "cv",
    element: <CV />,
    name: "CV"
  },

];

export default routes;
