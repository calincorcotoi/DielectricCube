import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../../App";
import NotFound from "../../pages/errors/NotFound";
import HomePage from "../../pages/homePage/HomePage";
import AboutPage from "../../pages/AboutPage";
import ServicesPage from "../../pages/ServicesPage";
import PricesPage from "../../pages/PricesPage";
import PortfolioPage from "../../pages/PortfolioPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/not-found", element: <NotFound /> },
      { path: "/despre", element: <AboutPage /> },
      { path: "/servicii", element: <ServicesPage /> },
      { path: "/preturi", element: <PricesPage /> },
      { path: "/portofoliu", element: <PortfolioPage /> },
      { path: "*", element: <Navigate replace to="/not-found" /> },
    ],
  },
]);
