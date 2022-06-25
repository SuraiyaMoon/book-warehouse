import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { Navigate, useLocation } from 'react-router-dom';

const RequireAuth = ({ Children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    if (loading) {
        return <p>loading...</p>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }

    return Children
};

export default RequireAuth;