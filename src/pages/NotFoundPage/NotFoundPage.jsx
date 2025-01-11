import { Helmet } from "react-helmet-async";
import { IoHome } from "react-icons/io5";

const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <Helmet>
                <title>RunTrack | 404 Not Found</title>
            </Helmet>

            <h2 className="text-5xl font-bold">404 Not Found</h2>
            <p className="mt-4 text-lg">
                The page you are looking for does not exist.
            </p>

            <a
                href="/"
                className="mt-4 text-blue-500 hover:underline flex gap-2"
            >
                Go back to Home <IoHome size={20} />
            </a>
        </div>
    );
};

export default NotFoundPage;
