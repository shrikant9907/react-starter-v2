import PageNotFound from "../layouts/PageNotFound";
import AccordionPage from "../pages/AccordionPage";
import { AlertPage } from "../pages/AlertPage";
import BreadcrumbPage from "../pages/BreadcrumbPage";
import ButtonPage from "../pages/ButtonPage";
import CardPage from "../pages/CardPage";
import FormPage from "../pages/FormPage";
import ListingPage from "../pages/ListingPage";
import LoaderPage from "../pages/LoaderPage";
import ModalPage from "../pages/ModalPage";
import PricingTablePage from "../pages/PricingTablePage";
import SocialIconPage from "../pages/SocialIconPage";
import StarIconPage from "../pages/StarPage";
import TablePage from "../pages/TablePage";

// Top Menu Paths
export const TopMenusRoutes = [
  {
    path: "/",
    element: <AlertPage />
  },
  {
    path: "/alert",
    element: <AlertPage />
  },
  {
    path: "/breadcrum",
    element: <BreadcrumbPage />
  },
  {
    path: "/button",
    element: <ButtonPage />
  },
  {
    path: "/listing",
    element: <ListingPage />
  },
  {
    path: "/card",
    element: <CardPage />
  },
  {
    path: "/pricing-table",
    element: <PricingTablePage />
  },
  {
    path: "/accordion",
    element: <AccordionPage />
  },
  {
    path: "/form",
    element: <FormPage />
  },
  {
    path: "/star-icon",
    element: <StarIconPage />
  },
  {
    path: "/social-icon",
    element: <SocialIconPage />
  },
  {
    path: "/modals",
    element: <ModalPage />
  },
  {
    path: "/loader",
    element: <LoaderPage />
  },
  {
    path: "/table",
    element: <TablePage />
  },
  {
    path: "/*",
    element: <PageNotFound />
  },
]

// Top Menu Links 
export const TopMenusLinks = [
  {
    name: 'Home',
    to: '/',
    show: true
  },
  {
    name: 'About',
    to: '/about',
    show: true
  },
  {
    name: 'Components',
    to: '/',
    show: true
  },
  {
    name: 'Layouts',
    to: '/layouts',
    show: true
  },
  {
    name: 'Examples',
    to: '/examples',
    show: true
  }
]