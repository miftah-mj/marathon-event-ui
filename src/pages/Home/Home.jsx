import { Helmet } from "react-helmet-async";
import Slider from "../../components/Slider";
import Marathons from "./Marathons";
import MarathonTips from "./MarathonTips";
import UpcommingMarathons from "./UpcommingMarathons";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>OnYourMark | Home</title>
            </Helmet>
            <Slider />
            <Marathons />
            <UpcommingMarathons />
            <MarathonTips />
        </div>
    );
};

export default Home;
