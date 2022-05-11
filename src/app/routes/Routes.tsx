import { Navigate, Route, Routes as SwitchRoutes } from "react-router-dom";
import NotFound from "../components/NotFound";
import useAuth from "../hooks/useAuth";
import PrivateRoute from "./PrivateRoute";

function Routes() {
  const auth = useAuth();

  return (
    <SwitchRoutes>
      {/* Default Route */}
      <Route path="/" element={<Navigate to="/home" />} />

      {/* Protected routes rendered under a condition */}
      <Route
        element={
          <PrivateRoute isAuth={auth.isAuthenticated} redirect="/login" />
        }
      >
        <Route path="/home" element={<p>Home page</p>} />
      </Route>

      {/* Normal routes accessed by all users */}
      <Route path="/login" element={<p>Login page</p>} />

      {/* Not Found Route */}
      <Route path="*" element={<NotFound />} />
    </SwitchRoutes>
  );
}

export default Routes;
