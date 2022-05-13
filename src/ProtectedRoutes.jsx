import React from "react";
import { useUserAuth } from "../src/context/UserAuthContext";
import { Outlet, Navigate } from "react-router-dom";

function ProtectedRoutes() {
  const { user } = useUserAuth();

  return user === null ? <Navigate to="/login" /> : <Outlet />;
}

export default ProtectedRoutes;
