import toast from "react-hot-toast";
import Modal from "../../components/Modal";
import UpdateRegistrationForm from "../../components/UpdateRegistrationForm";
import { useState } from "react";
import PropTypes from "prop-types";

const UpdateRegistration = ({
    registration,
    registrations,
    setRegistrations,
}) => {
    const { _id } = registration;
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const [updatedRegistration, setUpdatedRegistration] =
        useState(registration);

    const { marathonTitle, marathonStartDate } = registration;

    const handleUpdateRegistration = (id) => {
        setIsUpdateModalOpen(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedRegistration((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const handleUpdateSubmit = (updatedRegistration) => {
        fetch(`http://localhost:5000/registrations/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedRegistration),
        })
            .then((response) => response.json())
            .then((data) => {
                const updatedRegistrations = registrations.map((registration) =>
                    registration._id === _id ? data : registration
                );

                setRegistrations(updatedRegistrations);
                setIsUpdateModalOpen(false);
                toast.success("Registration updated successfully");
            })
            .catch(() => {
                toast.error("Failed to update registration");
            });
    };

    return (
        <div>
            <button
                onClick={() => handleUpdateRegistration(_id)}
                className="btn bg-primary text-white px-4 py-2 rounded-full"
            >
                Update
            </button>

            {isUpdateModalOpen && (
                <Modal onClose={() => setIsUpdateModalOpen(false)}>
                    {/* <UpdateRegistrationForm
                        registration={selectedRegistration}
                        onSubmit={handleUpdateSubmit}
                    /> */}

                    <form onSubmit={handleUpdateSubmit} className="w-96">
                        <div className="mb-4">
                            <label className="block text-gray-700">
                                Marathon Title
                            </label>
                            <input
                                type="text"
                                name="marathonTitle"
                                defaultValue={marathonTitle}
                                className="w-full px-3 py-2 border rounded"
                                readOnly
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">
                                Marathon Start Date
                            </label>
                            <input
                                type="text"
                                name="marathonStartDate"
                                defaultValue={marathonStartDate}
                                className="w-full px-3 py-2 border rounded"
                                readOnly
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">
                                First Name
                            </label>
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
                            <label className="block text-gray-700">
                                Last Name
                            </label>
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
                            <label className="block text-gray-700">
                                Contact Number
                            </label>
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
                            <label className="block text-gray-700">
                                Additional Info
                            </label>
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
                </Modal>
            )}
        </div>
    );
};

UpdateRegistration.propTypes = {
    registration: PropTypes.object.isRequired,
    registrations: PropTypes.array.isRequired,
    setRegistrations: PropTypes.func.isRequired,
};

export default UpdateRegistration;
