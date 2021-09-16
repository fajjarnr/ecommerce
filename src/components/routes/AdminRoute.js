import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import { currentAdmin } from "../../functions/auth";
import LoadingToRedirect from "./LoadingToRedirect";

const AdminRoute = ({ component: Component, children, ...rest }) => {
  const { user } = useSelector((state) => ({ ...state }));
  const [ok, setOk] = useState(false);

  useEffect(() => {
    if (user && user.token) {
      currentAdmin(user.token)
        .then(() => {
          setOk(true);
        })
        .catch(() => {
          setOk(false);
        });
    }
  }, [user]);

  return ok ? (
    <Route {...rest} render={() => <Component {...rest} />} />
  ) : (
    <LoadingToRedirect />
  );
};

export default AdminRoute;
