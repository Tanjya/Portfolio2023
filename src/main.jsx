import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainPage from "./Pages/MainPage.jsx";
import AboutPage from "./Pages/AboutPage.jsx";
import ProjectPage from "./Pages/ProjectPage.jsx";
import ContactPage from "./Pages/ContactPage.jsx";
import ErrorPage from "./Pages/ErrorPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<App />} errorElement={<ErrorPage />}>
      <Route path="" element={<MainPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/projects" element={<ProjectPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
