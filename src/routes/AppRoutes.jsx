import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import AuthLayout from "../layouts/AuthLayout";
import Register from "../pages/Auth/Register";
import Signin from "../pages/Auth/Signin";
import Dashboard from "../pages/Dashboard/Dashboard";
import AddMarathon from "../pages/Dashboard/AddMarathon";
import MyMarathonList from "../pages/Dashboard/MyMarathonList";
import MyApplyList from "../pages/Dashboard/MyApplyList";
import PrivateRoute from "./PrivateRoute";

const AppRoutes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "dashboard",
                element: (
                    <PrivateRoute>
                        <Dashboard />
                    </PrivateRoute>
                ),
                children: [
                    {
                        path: "add-marathon",
                        element: <AddMarathon />,
                    },
                    {
                        path: "marathon-list",
                        element: <MyMarathonList />,
                    },
                    {
                        path: "apply-list",
                        element: <MyApplyList />,
                    },
                ],
            },
        ],
    },
    {
        path: "auth",
        element: <AuthLayout />,
        children: [
            {
                path: "register",
                element: <Register />,
            },
            {
                path: "signin",
                element: <Signin />,
            },
        ],
    },
    {
        path: "*",
        element: <h2 className="text-5xl">404 Not Found</h2>,
    },
]);

export default AppRoutes;
