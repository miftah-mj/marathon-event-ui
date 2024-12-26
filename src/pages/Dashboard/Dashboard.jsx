import { Helmet } from "react-helmet-async";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="max-w-screen-xl mx-auto py-10">
            <Helmet>
                <title>OnYourMark | Dashboard</title>
            </Helmet>

            <div className="lg:grid lg:grid-cols-12 gap-4 lg:gap-10">
                <nav className="nav col-span-2 flex flex-col gap-4 items-start border-r border-gray-500 font-medium">
                    <h1 className="text-3xl font-semibold text-center">
                        Dashboard
                    </h1>

                    <NavLink
                        to="/dashboard/add-marathon"
                        className={({ isActive }) =>
                            `tab text-lg p-0 ${
                                isActive ? "text-secondary" : "hover:text-secondary"
                            }`
                        }
                    >
                        Add Marathon
                    </NavLink>
                    <NavLink
                        to="/dashboard/my-marathons"
                        className={({ isActive }) =>
                            `tab text-lg p-0 ${
                                isActive ? "text-secondary" : "hover:text-secondary"
                            }`
                        }
                    >
                        My Marathon List
                    </NavLink>
                    <NavLink
                        to="/dashboard/my-applies"
                        className={({ isActive }) =>
                            `tab text-lg p-0 ${
                                isActive ? "text-secondary" : "hover:text-secondary"
                            }`
                        }
                    >
                        My Apply List
                    </NavLink>
                </nav>

                <div className="col-span-10">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
