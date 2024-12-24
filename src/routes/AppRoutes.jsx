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
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import Marathons from "../pages/Marathon/Marathons";
import MarathonDetails from "../pages/Marathon/MarathonDetails";
import MarathonRegister from "../pages/Marathon/MarathonRegister";

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
                path: "marathons",
                element: (
                    <PrivateRoute>
                        <Marathons />
                    </PrivateRoute>
                ),
            },
            {
                path: "marathons/:id",
                element: (
                    <PrivateRoute>
                        <MarathonDetails />
                    </PrivateRoute>
                ),
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/marathons/${params.id}`),
            },
            {
                path: "marathon-register/:id",
                element: (
                    <PrivateRoute>
                        <MarathonRegister />
                    </PrivateRoute>
                ),
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/marathons/${params.id}`),
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
                        path: "my-marathon-list",
                        element: <MyMarathonList />,
                    },
                    {
                        path: "my-apply-list",
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
        element: <NotFoundPage />,
    },
]);

export default AppRoutes;
