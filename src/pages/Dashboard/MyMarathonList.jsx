import { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const MyMarathonList = () => {
    const { user } = useAuth();

    const [marathons, setMarathons] = useState([]);
    // console.log(marathons);

    useEffect(() => {
        fetch(`http://localhost:5000/marathons`)
            .then((res) => res.json())
            .then((data) => {
                setMarathons(data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }, []);

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
                fetch(`http://localhost:5000/marathons/${id}`, {
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
                                        <button className="btn btn-primary btn-xs">
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
        </div>
    );
};

export default MyMarathonList;
