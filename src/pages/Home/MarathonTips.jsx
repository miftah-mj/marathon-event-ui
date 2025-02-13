import { useEffect, useState } from "react";
import { FaRunning } from "react-icons/fa";

const MarathonTips = () => {
    const [tips, setTips] = useState([]);

    useEffect(() => {
        fetch("https://marathon-event-api.vercel.app/marathonTips")
            .then((res) => res.json())
            .then((data) => {
                setTips(data);
            });
    }, []);

    return (
        <div className="max-w-screen-xl mx-auto px-6 lg:px-0 py-12">
            <h6 className="text-xl font-raleway font-bold text-center text-textSecondary mb-4 uppercase">
                Marathon Tips
            </h6>
            <h3 className="text-3xl font-raleway font-semibold text-center text-textPrimary mb-10 uppercase">
                Here are some tips to help you prepare for the marathon.
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-6 lg:px-0  py-12">
                {tips.map((tip) => (
                    <div
                        key={tip._id}
                        className="card shadow-md rounded-lg p-4"
                    >
                        <FaRunning className="text-primary text-3xl mb-2" />
                        <h3 className="text-xl font-raleway font-semibold text-primary mb-2">
                            {tip.title}
                        </h3>
                        <p className="text-gray-700">{tip.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MarathonTips;
