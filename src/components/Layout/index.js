import React from "react"
import NavBar from "./NavBar"
import Footer from "./Footer"
import SocialMedia from "./SocialMedia"
import BackToTop from "./BackToTop"
import { useLocation } from "react-router-dom"

const Layout = ({ children, routes }) => {
  const location = useLocation()
  const currentPath =
    location.pathname === "/"
      ? location.pathname
      : location.pathname.split("/")[location.pathname.split("/").length - 1]

  let currentRoute = null

  routes.some((route) => {
    if (route.children) {
      const currentChild = route.children.find(
        (childRoute) => childRoute.path === currentPath
      )

      if (currentChild) {
        currentRoute = currentChild
        return true
      }
    } else {
      if (route.path === currentPath) {
        currentRoute = route
        return true
      }
    }
    return false
  })
  const isBlankLayout = currentRoute?.meta?.blankLayout || !currentRoute

  return (
    <div>
      {!isBlankLayout && <SocialMedia />}
      {!isBlankLayout && <BackToTop />}
      {!isBlankLayout && <NavBar />}
      {children}
      {!isBlankLayout && <Footer />}
    </div>
  )
}

export default Layout
