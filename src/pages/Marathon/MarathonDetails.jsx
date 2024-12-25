import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet-async";

const MarathonDetails = () => {
    const {
        _id,
        marathonTitle,
        startRegistrationDate,
        endRegistrationDate,
        marathonStartDate,
        location,
        runningDistance,
        description,
        marathonImage,
        totalRegistrationCount,
    } = useLoaderData();

    const { user } = useAuth();
    const navigate = useNavigate();

    const isRegistrationOpen = () => {
        const now = new Date();
        const startDate = new Date(startRegistrationDate);
        const endDate = new Date(endRegistrationDate);
        // console.log('now: ', now);
        // console.log('startDate: ', startDate);
        // console.log('endDate: ', endDate);
        // console.log(now >= startDate && now <= endDate);
        return now >= startDate && now <= endDate;
    };

    const handleRegisterEvents = () => {
        if (user) {
            navigate(`/marathon-register/${_id}`);
        } else {
            navigate("/auth/signin");
        }
    };

    return (
        <div className="container mx-auto p-4">
            <Helmet>
                <title>OnYourMark | {marathonTitle}</title>
            </Helmet>

            <h1 className="text-3xl font-bold mb-4">{marathonTitle}</h1>
            <img
                src={marathonImage}
                alt="Marathon"
                className="w-full h-64 object-cover mb-4"
            />
            <p className="text-lg mb-2">Location: {location}</p>
            <p className="text-lg mb-2">
                Registration Dates: {startRegistrationDate} -{" "}
                {endRegistrationDate}
            </p>
            <p className="text-lg mb-2">Marathon Date: {marathonStartDate}</p>
            <p className="text-lg mb-2">
                Total Registrations: {totalRegistrationCount}
            </p>
            <p className="text-lg mb-2">Running Distance: {runningDistance}</p>
            <p className="text-lg mb-2">Description: {description}</p>

            {isRegistrationOpen() ? (
                <button
                    onClick={handleRegisterEvents}
                    className="btn bg-primary text-white px-6 py-2 rounded-full"
                >
                    Register
                </button>
            ) : (
                <button
                    className="btn bg-gray-400 text-white px-6 py-2 rounded-full"
                    disabled
                >
                    Registration Closed
                </button>
            )}
        </div>
    );
};

export default MarathonDetails;
