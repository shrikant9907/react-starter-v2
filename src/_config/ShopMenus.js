import CartPage from "../layouts/CartPage"
import HomePage from "../layouts/HomePage"
import ShopPage from "../layouts/ShopPage"
import CheckoutPage from "../layouts/CheckoutPage"
import PageNotFound from "../layouts/PageNotFound"
import BlogPage from "../layouts/BlogPage"
import BlogDetailsPage from "../layouts/BlogDetailsPage"
import AboutPage from "../layouts/AboutPage"
import ContactPage from "../layouts/ContactPage"
import PrivacyPolicyPage from "../layouts/PrivacyPolicyPage"
import TermsAndConditionsPage from "../layouts/TermsAndConditionsPage"
 
export const ShopRoutings = [
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/about",
    element: <AboutPage />
  },
  {
    path: "/shop",
    element: <ShopPage />
  },
  {
    path: "/cart",
    element: <CartPage />
  },
  {
    path: "/checkout",
    element: <CheckoutPage />
  },
  {
    path: "/blog",
    element: <BlogPage />
  },
  {
    path: "/blog:/blogId",
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
export const ShopMenusLink = [
  {
    name: 'Home',
    to: '/',
    show: true
  },
  {
    name: 'Blog',
    to: '/blog',
    show: true
  },
  {
    name: 'Shop',
    to: '/shop',
    show: true
  },
  {
    name: 'Contact',
    to: '/contact',
    show: true
  },
]