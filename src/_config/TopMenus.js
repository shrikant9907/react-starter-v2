import PageNotFound from "../layouts/PageNotFound";
import { AlertPage } from "../pages/AlertPage";

// Top Menu Paths
export const TopMenusRoutes = [
  {
    path: "/",
    element: <AlertPage />
  },
  {
    path: "/alerts",
    element: <AlertPage />
  },
  {
    path: "/breadcrum",
    element: <AlertPage />
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