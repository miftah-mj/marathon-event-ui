import { Helmet } from "react-helmet-async";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="max-w-screen-xl mx-auto py-10">
            <Helmet>
                <title>OnYourMark | Dashboard</title>
            </Helmet>
            
            <div className="grid grid-cols-12 gap-4 lg:gap-10">
                <nav className="nav col-span-2 flex flex-col gap-4 items-start">
                    <h1 className="text-3xl font-semibold text-center">
                        Dashboard
                    </h1>

                    <NavLink
                        to="/dashboard/add-marathon"
                        className={({ isActive }) =>
                            `tab text-lg p-0 ${
                                isActive ? "text-primary" : "hover:text-primary"
                            }`
                        }
                    >
                        Add Marathon
                    </NavLink>
                    <NavLink
                        to="/dashboard/my-marathons"
                        className={({ isActive }) =>
                            `tab text-lg p-0 ${
                                isActive ? "text-primary" : "hover:text-primary"
                            }`
                        }
                    >
                        My Marathon List
                    </NavLink>
                    <NavLink
                        to="/dashboard/my-applies"
                        className={({ isActive }) =>
                            `tab text-lg p-0 ${
                                isActive ? "text-primary" : "hover:text-primary"
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
