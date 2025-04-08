import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../../App";
import NotFound from "../../pages/errors/NotFound";
import HomePage from "../../pages/homePage/HomePage";
import AboutPage from "../../pages/aboutPage/AboutPage";
import ServicesPage from "../../pages/servicesPage/ServicesPage";
import PricesPage from "../../pages/PricesPage";
import PortfolioPage from "../../pages/PortfolioPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/not-found", element: <NotFound /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/services", element: <ServicesPage /> },
      { path: "/prices", element: <PricesPage /> },
      { path: "/portfolio", element: <PortfolioPage /> },
      { path: "*", element: <Navigate replace to="/not-found" /> },
    ],
  },
]);
