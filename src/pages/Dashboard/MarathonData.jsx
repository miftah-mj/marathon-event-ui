import { useState } from "react";
import PropTypes from "prop-types";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import Modal from "../../components/Modal";
import UpdateMarathonForm from "../../components/UpdateMarathonForm";

const MarathonData = ({ marathon, marathons, setMarathons }) => {
    const { _id } = marathon;
    console.log("marathon id", _id);

    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const [selectedMarathon, setSelectedMarathon] = useState({});
    // console.log(selectedMarathon);

    const handleUpdateMarathon = (marathon) => {
        setSelectedMarathon(marathon);
        setIsUpdateModalOpen(true);
    };

    const handleUpdateSubmit = (updatedMarathon) => {
        fetch(`https://marathon-event-api.vercel.app/marathons/${_id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedMarathon),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    setMarathons((prevMarathons) =>
                        prevMarathons.map((marathon) =>
                            marathon._id === updatedMarathon._id
                                ? updatedMarathon
                                : marathon
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
                fetch(`https://marathon-event-api.vercel.app/marathons/${_id}`, {
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
                            setMarathons(
                                marathons.filter(
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
            <td>{marathons.indexOf(marathon) + 1}</td>
            <td>{marathon.marathonTitle}</td>
            <td>{marathon.marathonStartDate}</td>
            <td>{marathon.location}</td>
            <td>
                <div className="flex gap-4">
                    <button
                        onClick={() => handleUpdateMarathon(_id)}
                        className="btn bg-primary text-white px-6 py-2 rounded-full hover:bg-secondary"
                    >
                        Edit
                    </button>
                    <button
                        onClick={() => handleDeleteMarathon(_id)}
                        className="btn bg-primary text-white px-6 py-2 rounded-full hover:bg-secondary"
                    >
                        Delete
                    </button>
                </div>
            </td>

            {isUpdateModalOpen && (
                <Modal onClose={() => setIsUpdateModalOpen(false)}>
                    <UpdateMarathonForm
                        marathon={selectedMarathon}
                        onSubmit={handleUpdateSubmit}
                    />
                </Modal>
            )}
        </div>
    );
};

MarathonData.propTypes = {
    marathon: PropTypes.object.isRequired,
    marathons: PropTypes.array.isRequired,
    setMarathons: PropTypes.func.isRequired,
};

export default MarathonData;
