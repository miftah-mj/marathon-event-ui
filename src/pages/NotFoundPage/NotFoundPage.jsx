import { Helmet } from "react-helmet-async";
import { IoHome } from "react-icons/io5";
import ErrorAnimation from "../../assets/404.json";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-background">
            <Helmet>
                <title>404 | RunTrack</title>
            </Helmet>

            <div className="flex flex-col items-center">
                <Lottie animationData={ErrorAnimation}></Lottie>

                <p className="text-lg mb-2">
                    The page you are looking for does not exist.
                </p>
                <Link
                    to="/"
                    className="mt-4 bg-primary text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-brightGold transition duration-300"
                >
                    <IoHome size={20} />
                    Go back to Home
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;
