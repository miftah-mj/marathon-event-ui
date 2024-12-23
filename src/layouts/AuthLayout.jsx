import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";

const AuthLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Toaster />

            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <main className="flex-grow bg-gray-100">
                <Outlet />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default AuthLayout;
