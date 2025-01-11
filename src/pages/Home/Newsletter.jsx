import { FaCheck } from "react-icons/fa";

const Newsletter = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-backgroundDark py-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Subscribe to the RunTrack newsletter
            </h2>
            <ul className="flex justify-center gap-4 text-gray-600 mb-6">
                <li className="flex items-center gap-2">
                    <FaCheck className="text-secondary" /> Deals and discounts
                </li>
                <li className="flex items-center gap-2">
                    <FaCheck className="text-secondary" /> Runner insights
                </li>
                <li className="flex items-center gap-2">
                    <FaCheck className="text-secondary" /> Event discovery
                </li>
            </ul>
            <form className="flex flex-col gap-4">
                <div className="flex gap-2">
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-secondary transition"
                    >
                        Subscribe
                    </button>
                </div>
                <div className="flex items-start gap-2">
                    <input
                        type="checkbox"
                        id="terms"
                        className="mt-1"
                        required
                    />
                    <label htmlFor="terms" className="text-sm text-gray-600">
                        I have read and accept RunTrack{" "}
                        <a href="#" className="text-secondary hover:underline">
                            Terms of Service
                        </a>{" "}
                        and{" "}
                        <a href="#" className="text-secondary hover:underline">
                            Privacy Policy
                        </a>{" "}
                        and consent to the processing of personal data.
                    </label>
                </div>
            </form>
        </div>
    );
};

export default Newsletter;
