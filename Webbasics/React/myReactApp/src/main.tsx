import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import A5_2_App from "./A5.2_App.tsx";
import A8_App from "./A8_App.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <A5_2_App/>,
    },
    {
        path: "/A8",
        element: <A8_App/>,
    },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
    <RouterProvider router={router} />,
);

