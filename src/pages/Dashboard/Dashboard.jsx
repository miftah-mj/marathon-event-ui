import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="dashboard">
            <header className="header p-4">
                <h1 className="text-3xl font-bold">Dashboard</h1>
            </header>

            <div className="flex gap-10 lg:gap-20 items-center">
                <nav className="nav p-4 flex flex-col gap-4 items-start">
                    <NavLink
                        to="/dashboard/add-marathon"
                        className={({ isActive }) =>
                            `tab ${
                                isActive ? "text-accent" : "hover:text-accent"
                            }`
                        }
                    >
                        Add Marathon
                    </NavLink>
                    <NavLink
                        to="/dashboard/marathon-list"
                        className={({ isActive }) =>
                            `tab ${
                                isActive ? "text-accent" : "hover:text-accent"
                            }`
                        }
                    >
                        My Marathon List
                    </NavLink>
                    <NavLink
                        to="/dashboard/apply-list"
                        className={({ isActive }) =>
                            `tab ${
                                isActive ? "text-accent" : "hover:text-accent"
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
