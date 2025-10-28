import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "../feedback/Loading";
import Landing from "../layout/Landing";
import NotFound from "../error/NotFound";
import ErrorBoundary from "../error/ErrorBoundary";
const MainLayout = lazy(() => import("../layout/MainLayout"));
const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <ErrorBoundary>
          <MainLayout />
        </ErrorBoundary>
      </Suspense>
    ),
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={routes}></RouterProvider>;
};

export default AppRouter;
