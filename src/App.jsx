import Navbar from "./components/nav";
import Home from "./components/home";
import Upcomming from "./components/upcomming";
import Popular from "./components/popular";
import Root from "./routes/root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cast from "./components/cast";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "upcomming",
          element: <Upcomming />,
        },
        {
          path: "popular",
          element: <Popular />,
        },
        {
          path: "/home/cast/:id",
          element: <Cast />,
        },
      ],
    },
  ]);
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
};

export default App;
