import React from "react"
import ReactDOM from "react-dom/client"
import "./style/index.css"
import App from "./App"
import { HelmetProvider } from "react-helmet-async"
import "@fontsource/poppins"
import "@fontsource/poppins/400.css"
import "@fontsource/poppins/400-italic.css"
// import ReactGA from "react-ga4"

// const MEASUREMENT_ID = "G-FQ28ZT3P7D"
// ReactGA.initialize(MEASUREMENT_ID, {
//   gaOptions: {
//     measurement_id: MEASUREMENT_ID
//   }
// })
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
)
