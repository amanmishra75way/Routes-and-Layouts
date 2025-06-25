import React from "react";
import NotFound from "../pages/NotFound";
const WithAdmin = (Componets) => {
  const isAdmin = true;
  return function AuthComponent(props) {
    if (isAdmin) {
      return <Componets {...props} />;
    } else {
      return <NotFound />;
    }
  };
};

export default WithAdmin;
