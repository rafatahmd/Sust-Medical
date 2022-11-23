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
import Home from "./components/home";
import Doctor_dashboard from "./components/doctor_dashboard";
import Allpatient from "./components/Allpatient";
import Patient_dashboard from "./components/patient_dashboard";
import Alldoctor from "./components/alldoctor";
import Allmedicine from "./components/allmedicine";
import Admin_dashboard from "./components/admin_dashboard";
import Adddoctor from "./components/adddoctor";

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
  {
    path: "patient_dashboard",
    element: <Patient_dashboard />,
  },
  {
    path: "doctor_dashboard",
    element: <Doctor_dashboard />,
  },
  {
    path: "admin_dashboard",
    element: <Admin_dashboard />,
  },
  {
    path: "appointment_dashboard",
    element: <App />,
  },
  {
    path: "allpatien",
    element: <Allpatient />,
  },
  {
    path: "alldoctor",
    element: <Alldoctor />,
  },
  {
    path: "allmedicine",
    element: <Allmedicine />,
  },
  {
    path: "adddoctor",
    element: <Adddoctor />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
