import { useNavigate, useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const MarathonRegister = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const { _id, marathonTitle, marathonStartDate } = useLoaderData();

    const handleRegisterEvents = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const contactNumber = form.contactNumber.value;
        const additionalInfo = form.additionalInfo.value;

        const marathonRegister = {
            marathon_id: _id,
            email,
            firstName,
            lastName,
            contactNumber,
            additionalInfo,
        };

        fetch("http://localhost:5000/registrations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(marathonRegister),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    toast.success("Registered successfully");
                    navigate("/");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
                toast.error("Error:", error);
            });
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">
                Register for {marathonTitle}
            </h1>
            <form onSubmit={handleRegisterEvents}>
                <div className="mb-4">
                    <label className="block text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={user?.email || ""}
                        className="w-full px-3 py-2 border rounded"
                        readOnly
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">
                        Marathon Title
                    </label>
                    <input
                        type="text"
                        name="marathonTitle"
                        value={marathonTitle}
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
                        value={marathonStartDate}
                        className="w-full px-3 py-2 border rounded"
                        readOnly
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Last Name</label>
                    <input
                        type="text"
                        name="lastName"
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
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">
                        Additional Info (Optional)
                    </label>
                    <textarea
                        name="additionalInfo"
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
                <button
                    type="submit"
                    className="btn bg-primary text-white px-6 py-2 rounded-full"
                >
                    Register
                </button>
            </form>
        </div>
    );
};

export default MarathonRegister;
