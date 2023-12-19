import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./Home.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import { ApiProvider } from "@reduxjs/toolkit/query/react";
// import { api } from "./apiSlice.js";

import { Provider } from "react-redux";
import { store } from "./store.js";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Provider store={store}>
        <App />
      </Provider>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <p>Contact Us</p>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
