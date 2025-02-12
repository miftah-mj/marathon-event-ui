import { FaMagnifyingGlassLocation, FaPersonRunning } from "react-icons/fa6";
import { TbShoe } from "react-icons/tb";

const About = () => {
    return (
        <div
            id="about"
            className="max-w-screen-xl mx-auto flex flex-col md:flex-row gap-6 px-6 lg:px-0 py-24"
        >
            {/* image Section */}
            <div className="md:flex-1">
                <img
                    src="https://i.ibb.co.com/3f5jq2H/your-guide-to-the-2023-new-york-city-marathon.jpg"
                    alt="Marathon Runners"
                    className="shadow-lg object-cover w-full h-full"
                />
            </div>

            {/* content Section */}
            <div className="w-full md:flex-1 space-y-4 text-textSecondary">
                <h6 className="text-xl font-raleway font-bold uppercase">
                    About RunTrack
                </h6>
                <h2 className="text-3xl font-raleway text-textPrimary md:text-4xl font-bold mb-4 uppercase">
                    where runners become{" "}
                    <span className="text-accent">champions</span>
                </h2>
                <p className="text-textSecondary mb-6">
                    RunTrack is the largest marathon event in the world. Every
                    year, more than 50,000 runners from around the world gather
                    in New York City to participate in the event.
                </p>

                <div className="flex flex-col space-y-4">
                    {/* Stats 1 */}
                    <div className="bg-gray-100 rounded-lg shadow-md grid grid-cols-4 items-center text-textGray p-6">
                        <div className="text-accent flex items-center justify-center">
                            <FaPersonRunning size={70} />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h5 className="text-accent text-4xl font-bold mb-2">
                                273k+
                            </h5>
                            <p className="uppercase text-black">Runners</p>
                        </div>
                        <p className="col-span-2 text-sm text-center flex-1 text-black">
                            Cumulative total of runners throughout the
                            event&apos;s history.
                        </p>
                    </div>
                    {/* Stats 2 */}
                    <div className="bg-gray-100 rounded-lg shadow-md grid grid-cols-4 items-center text-textGray p-6">
                        <div className="text-accent flex flex-col items-center justify-center">
                            <TbShoe className="absolute" size={70} />
                            <FaMagnifyingGlassLocation
                                className="relative -bottom-8"
                                size={40}
                            />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h5 className="text-accent text-4xl font-bold mb-2">
                                30+
                            </h5>
                            <p className="uppercase text-black">Countries</p>
                        </div>
                        <p className="col-span-2 text-sm text-center flex-1 text-black">
                            Runners from over 30 countries participate in the
                            event.
                        </p>
                    </div>
                </div>

                <button className="btn bg-accent text-black mt-6 px-6 py-2 font-bold rounded-lg uppercase">
                    Learn more
                </button>
            </div>
        </div>
    );
};

export default About;
