import { useState } from "react";
import PropTypes from "prop-types";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import Modal from "../../components/Modal";
import UpdateRegistrationForm from "../../components/UpdateRegistrationForm";

const ApplyData = ({ registration, registrations, setRegistrations }) => {
    const { _id } = registration;
    console.log("reg id", _id);

    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const [selectedMarathon, setSelectedMarathon] = useState({});
    // console.log(selectedMarathon);

    const handleUpdateRegistration = (registration) => {
        setSelectedMarathon(registration);
        setIsUpdateModalOpen(true);
    };

    const handleUpdateSubmit = (updatedRegistration) => {
        fetch(`https://marathon-event-api.vercel.app/registrations/${_id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedRegistration),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    setRegistrations((prevregistrations) =>
                        prevregistrations.map((registration) =>
                            registration._id === updatedRegistration._id
                                ? updatedRegistration
                                : registration
                        )
                    );
                    toast.success("Marathon updated successfully!");
                    setIsUpdateModalOpen(false);
                }
            })
            .catch((error) => {
                console.error("Error:", error);
                toast.error("An error occurred while updating the marathon");
            });
    };

    const handleDeleteMarathon = (id) => {
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
                fetch(`https://marathon-event-api.vercel.app/registrations/${_id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                "Deleted!",
                                "Your marathon has been deleted.",
                                "success"
                            );
                            setRegistrations(
                                registrations.filter(
                                    (marathon) => marathon._id !== id
                                )
                            );
                        }
                    })
                    .catch((error) => console.error("Error:", error));
            }
        });
    };

    return (
        <div className="max-w-xl mx-auto flex justify-start items-start space-x-10">
            <td>{registrations.indexOf(registration) + 1}</td>
            <td>{registration.marathonTitle}</td>
            <td>{registration.marathonStartDate}</td>
            <td>{registration.firstName}</td>
            <td>{registration.lastName}</td>
            <td>{registration.contactNumber}</td>
            <td>{registration.additionalInfo}</td>
            <td>
                <div className="flex gap-4">
                    <button
                        onClick={() => handleUpdateRegistration(_id)}
                        className="btn bg-primary text-white px-6 py-2 rounded-full"
                    >
                        Edit
                    </button>
                    <button
                        onClick={() => handleDeleteMarathon(_id)}
                        className="btn bg-primary text-white px-6 py-2 rounded-full"
                    >
                        Delete
                    </button>
                </div>
            </td>

            {isUpdateModalOpen && (
                <Modal onClose={() => setIsUpdateModalOpen(false)}>
                    <UpdateRegistrationForm
                        marathon={selectedMarathon}
                        onSubmit={handleUpdateSubmit}
                    />
                </Modal>
            )}
        </div>
    );
};

export default ApplyData;
