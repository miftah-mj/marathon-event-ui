import { Helmet } from "react-helmet-async";
import Slider from "../../components/Slider";
import UpcommingMarathons from "./UpcommingMarathons";
import MarathonTips from "./MarathonTips";
import About from "./About";
import MarathonsEvents from "./MarathonEvents";
import Newsletter from "./Newsletter";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | RunTrack</title>
            </Helmet>
            <Slider />
            <About />
            <MarathonsEvents />
            <UpcommingMarathons />
            <MarathonTips />
            <Newsletter />
        </div>
    );
};

export default Home;
