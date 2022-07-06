import Home from "../layouts/home";
import ThemeAboutPage from "../layouts/theme/ThemeAboutPage";
import ThemeComponentsPage from "../layouts/theme/ThemeComponentsPage";
import ThemeExamplesPage from "../layouts/theme/ThemeExamplesPage";
import ThemeLayoutsPage from "../layouts/theme/ThemeLayoutsPages";

// Top Menu Paths
export const TopMenusRoutes = [
  {
    path: "/",
    exact: true,
    element: <Home />
  },
  {
    path: "/about",
    exact: true,
    element: <ThemeAboutPage />
  },
  {
    path: "/components",
    exact: true,
    element: <ThemeComponentsPage />
  },
  {
    path: "/components/:componentName",
    exact: true,
    element: <ThemeComponentsPage />
  },
  {
    path: "/layouts",
    exact: true,
    element: <ThemeLayoutsPage />
  },
  {
    path: "/layouts/:layoutName",
    exact: true,
    element: <ThemeLayoutsPage />
  },
  {
    path: "/examples",
    exact: true,
    element: <ThemeExamplesPage />
  },
  {
    path: "/examples:exampleName",
    exact: true,
    element: <ThemeExamplesPage />
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
    to: '/components',
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