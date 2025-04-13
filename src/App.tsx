import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Dashboard, Error, Login } from "./pages";
const router = createBrowserRouter([
  {
    element: (
      <div>
        <Outlet />
      </div>
    ),
    errorElement: <Error />,
    path: "/",
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        element: <Login />,
        path: "/login",
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
