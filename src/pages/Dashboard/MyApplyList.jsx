import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import UpdateRegistration from "./UpdateRegistration";
import { Helmet } from "react-helmet-async";

const MyApplyList = () => {
    const [registrations, setRegistrations] = useState([]);

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
        <div className=" mx-auto p-4">
            <Helmet>
                <title>OnYourMark | My Apply List</title>
            </Helmet>

            <h1 className="text-3xl font-bold text-center mb-4">
                My Apply List
            </h1>
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
                                    <div className="flex gap-2">
                                        <UpdateRegistration
                                            registration={registration}
                                            registrations={registrations}
                                            setRegistrations={setRegistrations}
                                        />

                                        <button
                                            onClick={() =>
                                                handleDeleteRegistration(
                                                    registration._id
                                                )
                                            }
                                            className="btn bg-primary text-white px-4 py-2 rounded-full"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyApplyList;
