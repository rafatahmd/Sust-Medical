import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Patient from "./components/patient";
import Doctor from "./components/doctor";
import Admin from "./components/admin";
import About from "./components/about";
import Appointment from "./components/appointment";
import RegistrationPatient from "./components/registrationPatient";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "doctor",
    element: <Doctor />,
  },
  {
    path: "patient",
    element: <Patient />,
  },

  {
    path: "admin",
    element: <Admin />,
  },

  {
    path: "about",
    element: <About />,
  },

  {
    path: "appointment",
    element: <Appointment />,
  },

  {
    path: "registrationpatient",
    element: <RegistrationPatient />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
