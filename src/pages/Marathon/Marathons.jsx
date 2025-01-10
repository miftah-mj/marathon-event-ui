import { useEffect, useState } from "react";
import MarathonCard from "./MarathonCard";
import { Helmet } from "react-helmet-async";

const Marathons = () => {
    const [marathons, setMarathons] = useState([]);
    const [sortOrder, setSortOrder] = useState("desc");

    useEffect(() => {
        fetch(
            `https://marathon-event-api.vercel.app/marathons?sort=${sortOrder}`
        )
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
        <div className="max-w-screen-xl mx-auto py-12">
            <Helmet>
                <title>OnYourMark | Marathons</title>
            </Helmet>

            <h6 className="text-xl font-raleway font-bold text-center text-textSecondary mb-4 uppercase">
                Marathons
            </h6>
            <h3 className="text-3xl font-raleway font-semibold text-center text-textPrimary mb-10 uppercase">
                All the marathons happening around the world
            </h3>

            <div className="flex justify-end items-center gap-2">
                <label className="text-lg text-secondary font-semibold uppercase">
                    sort by:
                </label>
                <select
                    value={sortOrder}
                    onChange={handleSortChange}
                    className="border border-gray-500 rounded px-2 py-1 font-semibold uppercase"
                >
                    <option value="desc">Newest to Oldest</option>
                    <option value="asc">Oldest to Newest</option>
                </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-12">
                {marathons.map((marathon) => (
                    <MarathonCard key={marathon._id} marathon={marathon} />
                ))}
            </div>
        </div>
    );
};

export default Marathons;
