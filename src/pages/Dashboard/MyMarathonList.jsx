import { useState, useEffect } from "react";
// import useAuth from "../../hooks/useAuth";
import MarathonData from "./MarathonData";
import { Helmet } from "react-helmet-async";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyMarathonList = () => {
    const { user } = useAuth();

    const [marathons, setMarathons] = useState([]);
    // console.log(marathons);
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        // fetch(`https://marathon-event-api.vercel.app/marathons`)
        //     .then((res) => res.json())
        //     .then((data) => {
        //         setMarathons(data);
        //     })
        //     .catch((error) => {
        //         console.error("Error:", error);
        //     });

        //* Using axios with custom hook
        axiosSecure
            .get(`/marathons?email=${user.email}`)
            .then((res) => setMarathons(res.data));
    }, [user.email, axiosSecure]);

    return (
        <div className="mx-auto p-4">
            <Helmet>
                <title>OnYourMark | My Marathon List</title>
            </Helmet>

            <h2 className="text-3xl font-raleway font-semibold text-center mb-4">
                My Marathon List
            </h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    <thead>
                        <tr className="max-w-xl mx-auto flex justify-start items-start space-x-10">
                            <th></th>
                            <th>Title</th>
                            <th>Starts</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {marathons.map((marathon) => (
                                <MarathonData
                                    key={marathon._id}
                                    marathon={marathon}
                                    marathons={marathons}
                                    setMarathons={setMarathons}
                                ></MarathonData>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyMarathonList;
