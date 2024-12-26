import { Helmet } from "react-helmet-async";
import Slider from "../../components/Slider";
import UpcommingMarathons from "./UpcommingMarathons";
import MarathonTips from "./MarathonTips";
import About from "./About";
import MarathonsEvents from "./MarathonEvents";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>OnYourMark | Home</title>
            </Helmet>
            <Slider />
            <About />
            <MarathonsEvents />
            <UpcommingMarathons />
            <MarathonTips />
        </div>
    );
};

export default Home;
