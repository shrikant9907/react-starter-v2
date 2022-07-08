import HomePage from "../layouts/HomePage"
import PageNotFound from "../layouts/PageNotFound"
import BlogPage from "../layouts/BlogPage"
import BlogDetailsPage from "../layouts/BlogDetailsPage"
import AboutPage from "../layouts/AboutPage"
import ContactPage from "../layouts/ContactPage"
import PrivacyPolicyPage from "../layouts/PrivacyPolicyPage"
import TermsAndConditionsPage from "../layouts/TermsAndConditionsPage"
 
export const BlogRoutings = [
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/about",
    element: <AboutPage />
  },
  {
    path: "/blog",
    element: <BlogPage />
  },
  {
    path: "/blog/:id",
    element: <BlogDetailsPage />
  },
  {
    path: "/contact",
    element: <ContactPage />
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicyPage />
  },
  {
    path: "/terms-and-conditions",
    element: <TermsAndConditionsPage />
  },
  {
    path: "/*",
    element: <PageNotFound />
  },
]

// Top Menu Links 
export const BlogMenuLinks = [
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
    name: 'Blog',
    to: '/blog',
    show: true
  },
  {
    name: 'Contact',
    to: '/contact',
    show: true
  },
]