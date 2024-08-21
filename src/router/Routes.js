import React, { Suspense } from "react"
import { Layout, Loading } from "../components"
import getRoutes from "./routes/index"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

const AppRoutes = () => {
  const routes = getRoutes()

  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Layout routes={routes}>
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={!route.children ? route.element : null}
              >
                {route.children &&
                  route.children.map((childRoute) => (
                    <Route
                      key={childRoute.path}
                      path={childRoute.path}
                      element={childRoute.element}
                    />
                  ))}
              </Route>
            ))}
          </Routes>
        </Layout>
      </Suspense>
    </Router>
  )
}

export default AppRoutes
