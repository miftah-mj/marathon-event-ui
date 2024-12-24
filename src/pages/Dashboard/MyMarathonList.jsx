import { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import MarathonData from "./MarathonData";

const MyMarathonList = () => {
    const { user } = useAuth();

    const [marathons, setMarathons] = useState([]);
    console.log(marathons);

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

    return (
        <div>
            <h2 className="text-2xl font-bold text-center mb-4">
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
