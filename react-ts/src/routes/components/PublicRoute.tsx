import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import { useAuth } from "#/context/AuthContext";
import { paths } from "#/routes/paths";

import { PublicRouteProps } from "./types";

const PublicRoute: React.FC<PublicRouteProps> = ({ user, redirectPath = "/" }) => {
  const location = useLocation();
  const { redirectToBirthday } = useAuth();

  const [userLoaded, setUserLoaded] = useState(false);

  useEffect(() => {
    if (user !== undefined) {
      setUserLoaded(true);
    }
  }, [user]);

  if (!userLoaded) {
    return null;
  }

  if (user) {
    if (redirectToBirthday) {
      return <Navigate to={paths.birthdayReservation} state={{ from: location }} replace />;
    }
    return <Navigate to={redirectPath} state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default PublicRoute;