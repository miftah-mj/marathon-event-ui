import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MarathonCard = ({ marathon }) => {
    const {
        _id,
        marathonTitle,
        location,
        startRegistrationDate,
        endRegistrationDate,
    } = marathon;

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg border p-4 bg-white">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{marathonTitle}</div>
                <p className="text-gray-700 text-base">Location: {location}</p>
                <p className="text-gray-700 text-base">
                    Registration Dates: {startRegistrationDate}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <Link to={`marathons/${_id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
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
