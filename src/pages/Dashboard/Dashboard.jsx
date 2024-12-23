import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="py-10">
            <header className="header p-4">
                <h1 className="text-2xl font-semibold text-center">Dashboard</h1>
            </header>

            <div className="flex gap-10 lg:gap-20 items-center">
                <nav className="nav flex flex-col gap-4 items-start">
                    <NavLink
                        to="/dashboard/add-marathon"
                        className={({ isActive }) =>
                            `tab text-lg ${
                                isActive ? "text-primary" : "hover:text-primary"
                            }`
                        }
                    >
                        Add Marathon
                    </NavLink>
                    <NavLink
                        to="/dashboard/marathon-list"
                        className={({ isActive }) =>
                            `tab text-lg ${
                                isActive ? "text-primary" : "hover:text-primary"
                            }`
                        }
                    >
                        My Marathon List
                    </NavLink>
                    <NavLink
                        to="/dashboard/apply-list"
                        className={({ isActive }) =>
                            `tab text-lg ${
                                isActive ? "text-primary" : "hover:text-primary"
                            }`
                        }
                    >
                        My Apply List
                    </NavLink>
                </nav>

                <div>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
