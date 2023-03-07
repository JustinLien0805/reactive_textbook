import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Book from "./pages/Book";
import MyList from "./pages/MyList";

const router = createBrowserRouter([
  { path: "/home", element: <Home /> },
  { path: "/", element: <SignIn /> },
  { path: "my-list", element: <MyList /> },
  { path: "/signin", element: <SignIn /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/book", element: <Book /> },
]);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
