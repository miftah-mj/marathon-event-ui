import { Helmet } from "react-helmet-async";
import Slider from "../../components/Slider";
import MarathonsSection from "./MarathonsSection";
import UpcommingMarathons from "./UpcommingMarathons";
import MarathonTips from "./MarathonTips";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>OnYourMark | Home</title>
            </Helmet>
            <Slider />
            <MarathonsSection />
            <UpcommingMarathons />
            <MarathonTips />
        </div>
    );
};

export default Home;
