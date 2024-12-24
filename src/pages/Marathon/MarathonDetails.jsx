import { useLoaderData } from "react-router-dom";

const MarathonDetails = () => {
const { _id } = useLoaderData();


    return (
        <div>
            <h2>
                Marathon Details: {_id}
            </h2>
        </div>
    );
};

export default MarathonDetails;