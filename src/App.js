import Routes from "./router/Routes"
import { ConfigProvider } from "antd"
import { Helmet } from "react-helmet-async"

const config = {
  token: {
    colorPrimary: "#4070F4"
  }
}

const App = () => {
  return (
    <>
      <Helmet>
        <meta charset="utf-8" />
        <title>
          Maheeshi Jayarathna
        </title>
        <meta
          name="description"
          content=""
        ></meta>
        <meta
          name="keywords"
          content=""
        ></meta>
        <meta name="author" content="Maheeshi Jayarathna"></meta>

        <meta
          name="description"
          content=""
        />
        <meta
          name="keywords"
          content=""
        />
        <meta name="author" content="Maheeshi Jayarathna"></meta>
      </Helmet>
      <ConfigProvider theme={config}>
        <Routes />
      </ConfigProvider>
    </>
  )
}

export default App
