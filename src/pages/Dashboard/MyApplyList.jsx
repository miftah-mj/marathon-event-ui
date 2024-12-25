import { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import Modal from "../../components/Modal";
import UpdateRegistrationForm from "../../components/UpdateRegistrationForm";
import { useParams } from "react-router-dom";

const MyApplyList = () => {
    const { user } = useAuth();
    // const { _id } = useParams();
    // console.log(_id);
    const [registrations, setRegistrations] = useState([]);
    const [selectedRegistration, setSelectedRegistration] = useState(null);
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

    console.log(registrations);

    useEffect(() => {
        fetch(`http://localhost:5000/registrations`)
            .then((res) => res.json())
            .then((data) => {
                setRegistrations(data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }, []);

    const handleUpdateRegistration = (registration) => {
        setSelectedRegistration(registration);
        setIsUpdateModalOpen(true);
    };

    const handleUpdateSubmit = (updatedRegistration) => {
        fetch(
            `http://localhost:5000/registrations/${updatedRegistration._id}`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedRegistration),
            }
        )
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    setRegistrations((prevRegistrations) =>
                        prevRegistrations.map((registration) =>
                            registration._id === updatedRegistration._id
                                ? updatedRegistration
                                : registration
                        )
                    );
                    toast.success("Registration updated successfully!");
                    setIsUpdateModalOpen(false);
                } else {
                    toast.error("Failed to update registration");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
                toast.error(
                    "An error occurred while updating the registration"
                );
            });
    };

    const handleDeleteRegistration = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/registrations/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                "Deleted!",
                                "Your registration has been deleted.",
                                "success"
                            );
                            setRegistrations(
                                registrations.filter(
                                    (registration) => registration._id !== id
                                )
                            );
                        }
                    })
                    .catch((error) => {
                        console.error("Error:", error);
                        toast.error("Error while deleting the registration");
                    });
            }
        });
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">My Apply List</h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    <thead>
                        <tr>
                            <th>Marathon Title</th>
                            <th>Marathon Start Date</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Contact Number</th>
                            <th>Additional Info</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {registrations.map((registration) => (
                            <tr key={registration._id}>
                                <td>{registration.marathonTitle}</td>
                                <td>{registration.marathonStartDate}</td>
                                <td>{registration.firstName}</td>
                                <td>{registration.lastName}</td>
                                <td>{registration.contactNumber}</td>
                                <td>{registration.additionalInfo}</td>
                                <td>
                                    <button
                                        onClick={() =>
                                            handleUpdateRegistration(
                                                registration
                                            )
                                        }
                                        className="btn bg-blue-500 text-white px-4 py-2 rounded mr-2"
                                    >
                                        Update
                                    </button>
                                    <button
                                        onClick={() =>
                                            handleDeleteRegistration(
                                                registration._id
                                            )
                                        }
                                        className="btn bg-red-500 text-white px-4 py-2 rounded"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {isUpdateModalOpen && (
                <Modal onClose={() => setIsUpdateModalOpen(false)}>
                    <UpdateRegistrationForm
                        registration={selectedRegistration}
                        onSubmit={handleUpdateSubmit}
                    />
                </Modal>
            )}
        </div>
    );
};

export default MyApplyList;
