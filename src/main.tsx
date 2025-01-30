import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./Home.tsx";
import { RouterProvider, createHashRouter } from "react-router";
import { homeLoader, detailLoader } from "./loaders.ts";
import Detail from "./Detail.tsx";
import ErrorBoundary from "./components/ErrorBoundary.tsx";
import { StrictMode } from "react";
import NotFound from "./components/NotFound.tsx";
import RootLayout from "./components/RootLayout.tsx";
import HomeFallback from "./HomeFallback.tsx";
import DetailFallback from "./DetailFallback.tsx";

const router = createHashRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorBoundary />,
      children: [
        {
          index: true,
          element: <Home />,
          loader: homeLoader,
          hydrateFallbackElement: <HomeFallback />,
        },
        {
          path: "/country/:id",
          element: <Detail />,
          loader: detailLoader,
          hydrateFallbackElement: <DetailFallback />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ],
  { basename: "/frontend-mentor-rest-countries-api-with-color-theme-switcher" }
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
