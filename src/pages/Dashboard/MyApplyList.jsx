import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import ApplyData from "./ApplyData";

const MyApplyList = () => {
    const { user } = useAuth();
    const [registrations, setRegistrations] = useState([]);
    const [searchTitle, setSearchTitle] = useState("");

    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        if (user) {
            fetchRegistrations();
        }
    }, [user.email, axiosSecure, searchTitle]);

    const fetchRegistrations = () => {
        const query = new URLSearchParams({ userId: user.uid });
        if (searchTitle) {
            query.append("title", searchTitle);
        }

        // fetch(`https://marathon-event-api.vercel.app/registrations?email=${user.email}?${query.toString()}`)
        //     .then((res) => res.json())
        //     .then((data) => {
        //         setRegistrations(data);
        //     })
        //     .catch((error) => {
        //         console.error("Error:", error);
        //     });

        // * Using axios with custom hook
        axiosSecure
            .get(`/registrations?email=${user.email}?${query.toString()}`)
            .then((res) => setRegistrations(res.data));
    };

    // const handleUpdateRegistration = (registration) => {
    //     setSelectedRegistration(registration);
    //     setIsUpdateModalOpen(true);
    // };

    // const handleUpdateSubmit = async (updatedRegistration) => {
    //     fetch(
    //         `https://marathon-event-api.vercel.app/registrations/${updatedRegistration._id}`,
    //         {
    //             method: "PATCH",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify(updatedRegistration),
    //         }
    //     )
    //         .then((res) => res.json())
    //         .then((data) => {
    //             if (data.modifiedCount > 0) {
    //                 setRegistrations((prevRegistrations) =>
    //                     prevRegistrations.map((registration) =>
    //                         registration._id === updatedRegistration._id
    //                             ? updatedRegistration
    //                             : registration
    //                     )
    //                 );
    //                 Swal.fire(
    //                     "Updated!",
    //                     "Your registration has been updated.",
    //                     "success"
    //                 );
    //                 setIsUpdateModalOpen(false);
    //             }
    //         })
    //         .catch((error) => {
    //             console.error("Error:", error);
    //             Swal.fire(
    //                 "Error!",
    //                 "An error occurred while updating the registration",
    //                 "error"
    //             );
    //         });
    // };

    // const handleDeleteRegistration = (id) => {
    //     Swal.fire({
    //         title: "Are you sure?",
    //         text: "You won't be able to revert this!",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Yes, delete it!",
    //     }).then(async (result) => {
    //         if (result.isConfirmed) {
    //             try {
    //                 const response = await axiosSecure.delete(
    //                     `/registrations/${id}`
    //                 );
    //                 if (response.data.deletedCount > 0) {
    //                     Swal.fire(
    //                         "Deleted!",
    //                         "Your registration has been deleted.",
    //                         "success"
    //                     );
    //                     setRegistrations(
    //                         registrations.filter(
    //                             (registration) => registration._id !== id
    //                         )
    //                     );
    //                 }
    //             } catch (error) {
    //                 console.error("Error deleting registration:", error);
    //             }
    //         }
    //     });
    // };

    return (
        <div className="container mx-auto p-4">
            <Helmet>
                <title>My Apply List</title>
            </Helmet>
            <h1 className="text-3xl font-bold mb-4">My Apply List</h1>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search by Marathon Title"
                    value={searchTitle}
                    onChange={(e) => setSearchTitle(e.target.value)}
                    className="w-full px-3 py-2 border rounded"
                />
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    <thead>
                        <tr className="max-w-xl mx-auto flex justify-start items-start space-x-4">
                            <th></th>
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
                        {/* {Array.isArray(registrations) &&
                            registrations.map((registration) => (
                                <tr key={registration._id}>
                                    <td>{registration.marathonTitle}</td>
                                    <td>{registration.marathonStartDate}</td>
                                    <td>{registration.firstName}</td>
                                    <td>{registration.lastName}</td>
                                    <td>{registration.contactNumber}</td>
                                    <td>{registration.additionalInfo}</td>
                                    <td>
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() =>
                                                    handleUpdateRegistration(
                                                        registration
                                                    )
                                                }
                                                className="btn bg-primary text-white px-4 py-2 rounded-full"
                                            >
                                                Update
                                            </button>
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
                            ))} */}

                        {Array.isArray(registrations) &&
                            registrations.map((registration) => (
                                <ApplyData
                                    key={registration._id}
                                    registration={registration}
                                    registrations={registrations}
                                    setRegistrations={setRegistrations}
                                />
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyApplyList;
