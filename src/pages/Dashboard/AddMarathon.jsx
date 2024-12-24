import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const AddMarathon = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [marathonDetails, setMarathonDetails] = useState({
        marathonTitle: "",
        startRegistrationDate: "",
        endRegistrationDate: "",
        marathonStartDate: "",
        location: "",
        runningDistance: "",
        description: "",
        marathonImage: "",
        createdAt: new Date(),
        totalRegistrationCount: 0,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMarathonDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:5000/marathonEvents", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(marathonDetails),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    navigate("/dashboard");
                } else {
                    toast.error("Failed to add marathon event");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    return (
        <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-center mb-4">
                Add Marathon
            </h1>
            <p className="text-gray-700 text-center mb-4">
                Welcome, {user?.name}! Fill in the details to add a new marathon
                event.
            </p>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700">
                        Marathon Title
                    </label>
                    <input
                        type="text"
                        name="marathonTitle"
                        value={marathonDetails.marathonTitle}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">
                        Start Registration Date
                    </label>
                    <input
                        type="date"
                        name="startRegistrationDate"
                        value={marathonDetails.startRegistrationDate}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">
                        End Registration Date
                    </label>
                    <input
                        type="date"
                        name="endRegistrationDate"
                        value={marathonDetails.endRegistrationDate}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">
                        Marathon Start Date
                    </label>
                    <input
                        type="date"
                        name="marathonStartDate"
                        value={marathonDetails.marathonStartDate}
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
                        value={marathonDetails.location}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">
                        Running Distance
                    </label>
                    <input
                        type="text"
                        name="runningDistance"
                        value={marathonDetails.runningDistance}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Description</label>
                    <textarea
                        name="description"
                        value={marathonDetails.description}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">
                        Marathon Image URL
                    </label>
                    <input
                        type="text"
                        name="marathonImage"
                        value={marathonDetails.marathonImage}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="btn bg-primary text-white px-6 py-2 rounded-full"
                >
                    Add Marathon
                </button>
            </form>
        </div>
    );
};

export default AddMarathon;
