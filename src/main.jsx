import React from "react";
import ReactDOM from "react-dom/client";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import "./index.css";
import { UserData } from "./components/User";
import App from "./App.jsx";
import { Counter } from "./components/Counter";
import { UserDataCount } from "./components/UserCount";
import { FormValidation } from "./components/Form";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route path="assignment-1" element={<UserData />} />
            <Route path="assignment-2" element={<Counter />} />
            <Route path="assignment-3" element={<UserDataCount />} />
            <Route path="assignment-4" element={<FormValidation />} />
            <Route path="*" element={<div>Not found</div>} />
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
