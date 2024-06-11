import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./RootLayout";
import "./App.css";

function App({ children }) {
  // create browser router object
  const browserRouter = createBrowserRouter([
    {
      path: "",
      element: <RootLayout />
    }
  ]);

  return <RouterProvider router={browserRouter}>{children}</RouterProvider>;
}

export default App;
