import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MarathonCard = ({ marathon }) => {
    const {
        _id,
        marathonTitle,
        marathonImage,
        location,
        startRegistrationDate,
        endRegistrationDate,
        marathonStartDate,
    } = marathon;

    return (
        <div className="rounded overflow-hidden shadow-lg border p-4 bg-white">
            <div>
                <img
                    className="w-full h-56 object-cover"
                    src={marathonImage}
                    alt="event-image"
                />
            </div>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{marathonTitle}</div>
                <p className="text-gray-700 text-base">Location: {location}</p>
                <p className="text-gray-700 text-base">
                    Registration Dates: {startRegistrationDate} to{" "}
                    {endRegistrationDate}
                </p>
                <p className="text-gray-700 text-base">
                    Marathon Starts: {marathonStartDate}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <Link
                    to={`/marathons/${_id}`}
                    className="btn bg-primary text-white font-bold px-4 rounded hover:bg-secondary"
                >
                    See Details
                </Link>
            </div>
        </div>
    );
};

MarathonCard.propTypes = {
    marathon: PropTypes.object.isRequired,
};

export default MarathonCard;
