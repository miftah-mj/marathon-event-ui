import { useState } from "react";
import PropTypes from "prop-types";

const UpdateMarathonForm = ({ marathon, onSubmit }) => {
    const [updatedMarathon, setUpdatedMarathon] = useState(marathon);

    console.log("marathon ", marathon);
    console.log("updatedMarathon ", updatedMarathon);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedMarathon((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(updatedMarathon);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label className="block text-gray-700">Marathon Title</label>
                <input
                    type="text"
                    name="marathonTitle"
                    value={marathon.marathonTitle}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Start Date</label>
                <input
                    type="date"
                    name="marathonStartDate"
                    value={updatedMarathon.marathonStartDate}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Location</label>
                <input
                    type="text"
                    name="location"
                    value={updatedMarathon.location}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded"
                    required
                />
            </div>
            <button
                type="submit"
                className="btn bg-primary text-white px-6 py-2 rounded-full"
            >
                Update Marathon
            </button>
        </form>
    );
};

UpdateMarathonForm.propTypes = {
    marathon: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default UpdateMarathonForm;
