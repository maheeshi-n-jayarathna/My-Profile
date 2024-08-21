import { lazy } from "react"
import { Navigate } from "react-router-dom"

const Home = lazy(() => import("./../../pages/Home"))
const AboutUs = lazy(() => import("./../../pages/AboutUs"))
const Services = lazy(() => import("./../../pages/Services"))
const WebDevelopment = lazy(() =>
  import("./../../pages/Services/WebDevelopment")
)
const MobileAppDevelopment = lazy(() =>
  import("./../../pages/Services/MobileAppDevelopment")
)
const WebServices = lazy(() => import("./../../pages/Services/WebServices"))
const ProjectManagement = lazy(() =>
  import("./../../pages/Services/ProjectManagement")
)
const Design = lazy(() => import("./../../pages/Services/Design"))
const UserExperience = lazy(() =>
  import("./../../pages/Services/UserExperience")
)
const Blog = lazy(() => import("./../../pages/Blog"))

const Terms = lazy(() => import("./../../pages/Terms"))
const Privacy = lazy(() => import("./../../pages/Privacy"))
const Error = lazy(() => import("./../../pages/Misc"))

export const getRoutes = () => {
  return [
    {
      path: "/",
      element: <Home />
    },
    { path: "about-us", element: <AboutUs /> },
    {
      path: "service",
      element: <Services />,
      children: [
        { path: "", element: <Navigate to="web-development" /> },
        { path: "web-development", element: <WebDevelopment /> },
        {
          path: "mobile-app-development",
          element: <MobileAppDevelopment />
        },
        { path: "web-services", element: <WebServices /> },
        { path: "project-management", element: <ProjectManagement /> },
        { path: "design", element: <Design /> },
        { path: "user-experience", element: <UserExperience /> }
      ]
    },
    { path: "blog", element: <Blog /> },
    { path: "terms", element: <Terms />, meta: { blankLayout: true } },
    { path: "privacy", element: <Privacy />, meta: { blankLayout: true } },
    { path: "*", element: <Error />, meta: { blankLayout: true } }
  ]
}

export default getRoutes
