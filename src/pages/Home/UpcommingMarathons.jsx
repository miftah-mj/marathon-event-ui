import { useEffect, useState } from "react";
import MarathonCard from "../Marathon/MarathonCard";

const UpcommingMarathons = () => {
    const [marathons, setMarathons] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/upcoming-marathons")
            .then((res) => res.json())
            .then((data) => {
                setMarathons(data);
                // console.log(data);
            });
    }, []);

    return (
        <div className="bg-gray-50">
            <div className="max-w-screen-xl mx-auto py-10">
                <h2 className="text-3xl font-semibold text-center mb-4">
                    Upcoming Marathons
                </h2>
                <p className="text-center text-gray-700 mb-10">
                    Here are some marathons that are coming up soon.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10">
                    {marathons.map((marathon) => (
                        <MarathonCard key={marathon._id} marathon={marathon} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UpcommingMarathons;
