

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    },
]);