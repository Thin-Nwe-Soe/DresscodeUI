import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App"; // Import App for layout
import AllowedPage from "./pages/AllowedPage";
import NotAllowedPage from "./pages/NotAllowedPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Use the App component as the main layout
    children: [
      {
        path: "/",
        element: <AllowedPage />,
      },
      {
        path: "/notallowed",
        element: <NotAllowedPage />,
      },
      // We remove direct route to NotAllowedCapturePage and use toggle instead in App
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
