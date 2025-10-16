import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "./styles/theme.css";
import "./styles/typography.css";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import "./styles/globals.css";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import ErrorPage from "./pages/ErrorPage.js";
import ApiPlayground from "./pages/ApiPlayground.js";



const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/projects", element: <Projects /> },
      { path: "/about", element: <About /> },
      { path: "/Contact", element: <Contact /> },
      { path: "/Error", element: <ErrorPage /> },
      { path: "/ApiPlayground", element: <ApiPlayground /> },      
      { path: "*", element: <ErrorPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
