import { useEffect, useState } from "react";
import MarathonCard from "../Marathon/MarathonCard";

const UpcommingMarathons = () => {
    const [marathons, setMarathons] = useState([]);

    useEffect(() => {
        fetch("https://marathon-event-api.vercel.app/upcoming-marathons")
            .then((res) => res.json())
            .then((data) => {
                setMarathons(data);
                // console.log(data);
            });
    }, []);

    return (
        <div className="bg-backgroundDark">
            <div className="max-w-screen-xl mx-auto py-12">
                <h6 className="text-xl font-raleway font-bold text-center text-textSecondary mb-4 uppercase">
                    upcomming marathons
                </h6>
                <h3 className="text-3xl font-raleway font-semibold text-center text-textPrimary mb-10 uppercase">
                    Here are some of the marathons coming up in the near future
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-12">
                    {marathons.map((marathon) => (
                        <MarathonCard key={marathon._id} marathon={marathon} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UpcommingMarathons;
