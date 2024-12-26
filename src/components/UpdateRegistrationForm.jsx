import { useState } from "react";
import PropTypes from "prop-types";

const UpdateRegistrationForm = ({ registration, onSubmit }) => {
    const [updatedRegistration, setUpdatedRegistration] = useState(registration);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedRegistration((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit(updatedRegistration);
    };

    return (
        <form onSubmit={handleSubmit} className="w-96">
            <div className="mb-4">
                <label className="block text-gray-700">First Name</label>
                <input
                    type="text"
                    name="firstName"
                    value={updatedRegistration.firstName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Last Name</label>
                <input
                    type="text"
                    name="lastName"
                    value={updatedRegistration.lastName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Contact Number</label>
                <input
                    type="text"
                    name="contactNumber"
                    value={updatedRegistration.contactNumber}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Additional Info</label>
                <textarea
                    name="additionalInfo"
                    value={updatedRegistration.additionalInfo}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded"
                />
            </div>
            <button
                type="submit"
                className="btn bg-primary text-white px-6 py-2 rounded-full"
            >
                Update Registration
            </button>
        </form>
    );
};

UpdateRegistrationForm.propTypes = {
    registration: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default UpdateRegistrationForm;
