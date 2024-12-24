import { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import Modal from "../../components/Modal";
import UpdateMarathonForm from "../../components/UpdateMarathonForm";
import { useParams } from "react-router-dom";

const MyMarathonList = () => {
    const { user } = useAuth();
    const { _id } = useParams();
    console.log(_id);
    const [marathons, setMarathons] = useState([]);
    const [selectedMarathon, setSelectedMarathon] = useState(null);
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:5000/marathons}`)
            .then((res) => res.json())
            .then((data) => {
                setMarathons(data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }, []);

    const handleUpdateMarathon = (marathon) => {
        setSelectedMarathon(marathon);
        setIsUpdateModalOpen(true);
    };

    const handleUpdateSubmit = (updatedMarathon) => {
        fetch(`http://localhost:5000/marathons/${_id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedMarathon),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    setMarathons((prevMarathons) =>
                        prevMarathons.map((marathon) =>
                            marathon._id === updatedMarathon._id
                                ? updatedMarathon
                                : marathon
                        )
                    );
                    toast.success("Marathon updated successfully!");
                    setIsUpdateModalOpen(false);
                } else {
                    toast.error("Failed to update marathon");
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
                fetch(`http://localhost:5000/marathons/${_id}`, {
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
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Registration</th>
                            <th>Marathon Starts</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {marathons.map((marathon) => (
                            <tr key={marathon._id}>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={marathon.marathonImage}
                                                    alt="photo"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">
                                                {marathon.marathonTitle}
                                            </div>
                                            <div className="text-sm opacity-50">
                                                {marathon.location}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {marathon.startRegistrationDate} to{" "}
                                    {marathon.endRegistrationDate}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">
                                        {marathon.runningDistance}
                                    </span>
                                </td>
                                <td>{marathon.marathonStartDate}</td>
                                <th>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={handleUpdateMarathon}
                                            className="btn btn-primary btn-xs"
                                        >
                                            Update
                                        </button>
                                        <button
                                            onClick={handleDeleteMarathon}
                                            className="btn btn-secondary btn-xs"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
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

export default MyMarathonList;
