import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import A2_App from "./A2_App";
import A5_1_App from "./A5.1_App";
import A5_2_App from "./A5.2_App";
import A7_1_App from "./A7.1_App";
import A7_2_App from "./A7.2_App";
import A8_App from "./A8_App";

const router = createBrowserRouter([
    { path: "/", element: <A2_App /> },
    { path: "/A5.1", element: <A5_1_App /> },
    { path: "/A5.2", element: <A5_2_App /> },
    { path: "/A7.1", element: <A7_1_App /> },
    { path: "/A7.2", element: <A7_2_App /> },
    { path: "/A8", element: <A8_App /> },
]);

const root = document.getElementById("root")!;

ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
