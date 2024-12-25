import Slider from "../../components/Slider";
import Marathons from "./Marathons";
import MarathonTips from "./MarathonTips";
import UpcommingMarathons from "./UpcommingMarathons";

const Home = () => {
    return (
        <div>
            <Slider />
            <Marathons />
            <UpcommingMarathons />
            <MarathonTips />
        </div>
    );
};

export default Home;
