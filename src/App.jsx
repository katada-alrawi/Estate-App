
import Home from "./pages/homepage/Home.jsx";
import ListPage from "./pages/listpage/ListPage.jsx"; // Ensure ListPage is imported correctly
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/layout/Layout.jsx";
import SinglePage from "./pages/SinglePage/SinglePage.jsx";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        }, {
          path: "/list",
          element: <ListPage />,
        }, {
          path: "/:id",
          element: <SinglePage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
