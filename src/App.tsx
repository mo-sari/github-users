import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Dashboard, Error, Login } from "./pages";
import { action as SearchAction } from "./pages/Dashboard";
import { store } from "./store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Layout from "./pages/Layout";
import { loader as DashboardLoader } from "./pages/Dashboard";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <Error />,
    path: "/",
    children: [
      {
        index: true,
        element: <Dashboard />,
        action: SearchAction(store, queryClient),
        loader: DashboardLoader(store),
      },
      {
        element: <Login />,
        path: "/login",
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>;
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
