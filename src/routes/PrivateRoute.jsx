import PropTypes from "prop-types";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../components/Spinner";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();

    const location = useLocation();
    // console.log(location);

    if (loading) {
        return <Spinner />;
    }

    if (user && user?.email) {
        return children;
    }

    return <Navigate state={location?.pathname} to="/auth/signin" />;
};

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PrivateRoute;
