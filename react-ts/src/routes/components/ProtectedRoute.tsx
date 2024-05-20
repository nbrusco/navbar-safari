import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import { ProtectedRouteProps } from "./types";

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ branch, redirectPath = "/" }) => {
  const location = useLocation();
  const [branchLoaded, setBranchLoaded] = useState(false);

  useEffect(() => {
    if (branch !== undefined) {
      setBranchLoaded(true);
    }
  }, [branch]);

  if (!branchLoaded) {
    return null;
  }

  if (!branch) {
    return <Navigate to={redirectPath} state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;