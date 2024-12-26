import { useEffect, useState } from "react";

const useMarathons = () => {
    const [marathons, setMarathons] = useState([]);

    useEffect(() => {}, []);

    return [marathons];
};

export default useMarathons;
