import React from "react";
import NotFound from "../pages/NotFound";
const WithAdmin = (Componets) => {
  const isAdmin = false;
  return function AuthComponent(props) {
    if (isAdmin) {
      return <Componets {...props} />;
    } else {
      return <NotFound />;
    }
  };
};

export default WithAdmin;
