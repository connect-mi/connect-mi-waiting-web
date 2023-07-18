import { createBrowserRouter } from "react-router-dom";
import { ErrorPage, Home } from "./screens";

// import ErrorPage from "./error-page";

const App = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
]);

export default App;
