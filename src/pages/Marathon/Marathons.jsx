import { useEffect, useState } from "react";
import MarathonCard from "./MarathonCard";
import { Helmet } from "react-helmet-async";

const Marathons = () => {
    const [marathons, setMarathons] = useState([]);
    const [sortOrder, setSortOrder] = useState("desc");

    useEffect(() => {
        fetch(`http://localhost:5000/marathons?sort=${sortOrder}`)
            .then((res) => res.json())
            .then((data) => {
                setMarathons(data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }, [sortOrder]);

    const handleSortChange = (e) => {
        setSortOrder(e.target.value);
    };

    return (
        <div className="max-w-screen-xl mx-auto py-10">
            <Helmet>
                <title>OnYourMark | Marathons</title>
            </Helmet>
            <h2 className="text-3xl font-semibold text-center">
                All Marathon Events
            </h2>

            <div className="flex justify-end mb-4">
                <label className="mr-2">Sort by:</label>
                <select
                    value={sortOrder}
                    onChange={handleSortChange}
                    className="border rounded px-2 py-1"
                >
                    <option value="desc">Newest to Oldest</option>
                    <option value="asc">Oldest to Newest</option>
                </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10">
                {marathons.map((marathon) => (
                    <MarathonCard key={marathon._id} marathon={marathon} />
                ))}
            </div>
        </div>
    );
};

export default Marathons;
