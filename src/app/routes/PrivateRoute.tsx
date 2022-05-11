import { Navigate, Outlet } from "react-router-dom"

const PrivateRoute: React.FC<{
    isAuth: boolean,
    redirect: string
}> = ({ isAuth, redirect })=>{
    return isAuth ? <Outlet/> : <Navigate to={redirect}/>
}

export default PrivateRoute