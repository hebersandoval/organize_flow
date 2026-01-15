import { Outlet, Navigate } from 'react-router-dom';

// Local imports
import { useUser } from '../context/UserContext';

export default function PrivateRoute() {
    const { user } = useUser();

    return user ? <Outlet /> : <Navigate to="/signin" />;
}
