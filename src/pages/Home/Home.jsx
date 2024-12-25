import Slider from "../../components/Slider";
import Marathons from "./Marathons";
import UpcommingMarathons from "./UpcommingMarathons";

const Home = () => {
    return (
        <div>
            <h1>
                <Slider />

                <Marathons />

                <UpcommingMarathons />
            </h1>
        </div>
    );
};

export default Home;
