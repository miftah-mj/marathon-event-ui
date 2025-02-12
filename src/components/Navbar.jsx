import { NavLink, Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import logo from "../assets/logo.png";
// import { Link } from "react-scroll";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
    const { user, signOutUser } = useAuth();

    const handleSignout = () => {
        signOutUser()
            .then(() => {
                toast.success("Signed out successfully");
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    const links = (
        <>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    `tab text-base ${
                        isActive ? "text-secondary" : "hover:text-secondary"
                    }`
                }
            >
                Home
            </NavLink>
            <NavLink
                to="/marathons"
                className={({ isActive }) =>
                    `tab text-base ${
                        isActive ? "text-secondary" : "hover:text-secondary"
                    }`
                }
            >
                Marathons
            </NavLink>
            <NavLink
                to="/gallery"
                className={({ isActive }) =>
                    `tab text-base ${
                        isActive ? "text-secondary" : "hover:text-secondary"
                    }`
                }
            >
                Gallery
            </NavLink>
            <NavLink
                to="/results"
                className={({ isActive }) =>
                    `tab text-base ${
                        isActive ? "text-secondary" : "hover:text-secondary"
                    }`
                }
            >
                Results
            </NavLink>

            {user && user?.email ? (
                <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                        `tab text-base ${
                            isActive ? "text-secondary" : "hover:text-secondary"
                        }`
                    }
                >
                    Dashboard
                </NavLink>
            ) : null}

            <Link
                to="contact"
                smooth={true}
                duration={500}
                className="tab text-base cursor-pointer hover:text-secondary"
            >
                Contact
            </Link>
        </>
    );

    return (
        <nav className="bg-background backdrop-blur-md bg-opacity-60 sticky top-0 z-50">
            <div className="navbar max-w-screen-xl mx-auto py-2 px-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[10] mt-3 w-52 p-2 shadow font-medium"
                        >
                            {links}
                        </ul>
                    </div>
                    <Link
                        to="/"
                        className="text-xl text-textPrimary md:text-2xl font-bold flex items-center gap-2"
                    >
                        <img
                            src={logo}
                            alt="Logo"
                            className="w-12 h-12 lg:w-16 lg:h-16"
                        />
                        <h2>
                            <span className="font-raleway text-secondary">
                                RunTrack
                            </span>
                        </h2>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-medium text-lg">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end space-x-4">
                    <ThemeToggle />

                    <div>
                        {user && user?.email ? (
                            <div className=" flex items-center gap-4">
                                <div className="flex flex-col items-center">
                                    <img
                                        src={
                                            user?.photoURL ||
                                            "https://i.ibb.co.com/P1n2z8D/profile-icon-design-free-vector.jpg"
                                        }
                                        alt="user"
                                        className="w-10 h-10 rounded-full"
                                    />
                                    <p className="text-sm">
                                        {user?.displayName}
                                    </p>
                                </div>

                                <button
                                    onClick={handleSignout}
                                    className="btn btn-outline text-secondary bg-white/30"
                                >
                                    Log Out
                                </button>
                            </div>
                        ) : (
                            <div className=" flex items-center gap-4">
                                <NavLink
                                    to="/auth/register"
                                    className="btn btn-outline text-secondary bg-white/30 hover:bg-secondary"
                                >
                                    Register
                                </NavLink>

                                <NavLink
                                    to="/auth/signin"
                                    className="btn btn-outline text-secondary bg-white/30 hover:bg-secondary"
                                >
                                    Sign In
                                </NavLink>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
