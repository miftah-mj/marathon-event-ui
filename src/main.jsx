import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={AppRoutes} />
    </StrictMode>
);
