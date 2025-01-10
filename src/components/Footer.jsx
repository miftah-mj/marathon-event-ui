import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => {
    return (
        <footer className="footer-center bg-background font-raleway text-primary pt-12 pb-4">
            <div className="flex flex-col items-center space-y-2">
                <img src={logo} alt="Logo" className="w-16 h-16" />
                <h1 className="text-2xl font-bold">OnYourMark</h1>
                <p className="text-center">
                    This is a brief description of the website. It provides
                    information about the purpose and content of the site.
                </p>
            </div>
            <nav className="grid grid-flow-col gap-4 mt-4">
                <Link to="/" className="link link-hover">
                    About us
                </Link>
                <Link to="/" className="link link-hover">
                    Contact
                </Link>
                <Link to="/marathons" className="link link-hover">
                    Marathons
                </Link>
            </nav>
            <p className="mt-4">
                &copy; {new Date().getFullYear()} OnYourMark. All rights
                reserved.
            </p>
        </footer>
    );
};

export default Footer;
