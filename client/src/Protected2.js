import { useAuth } from './context/authContext'
import { Navigate, Outlet } from "react-router-dom";

function Protected2() {
    const {user, isAuthenticated} = useAuth();

    if(!isAuthenticated){
        return <Navigate to='/login' replace />
    }
  return (
    <Outlet></Outlet>
  )
}

export default Protected2
