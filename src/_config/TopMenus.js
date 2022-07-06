import ThemeComponentsPage from "../layouts/theme/ThemeComponentsPage";

// Top Menu Paths
export const TopMenusRoutes = [
  {
    path: "/",
    exact: true,
    element: <ThemeComponentsPage />
  },
]

// Top Menu Links 
export const TopMenusLinks = [
  // {
  //   name: 'Home',
  //   to: '/',
  //   show: true
  // },
  // {
  //   name: 'About',
  //   to: '/about',
  //   show: true
  // },
  {
    name: 'Components',
    to: '/',
    show: true
  },
  // {
  //   name: 'Layouts',
  //   to: '/layouts',
  //   show: true
  // },
  // {
  //   name: 'Examples',
  //   to: '/examples',
  //   show: true
  // }
]