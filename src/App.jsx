import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import PublicLayouts from "./layouts/PublicLayouts";
import AdminLayouts from "./layouts/AdminLayouts";

const App = () => {
  return (
    <Routes>
      {/* Public pages with Navbar + Footer */}
      <Route path="/" element={<PublicLayouts />}>
        <Route index element={<Home />} /> {/* path: "/" */}
        <Route path="about" element={<About />} /> {/* path: "/about" */}
        <Route path="contact" element={<Contact />} /> {/* path: "/contact" */}
      </Route>

      {/* Admin pages with Sidebar */}
      <Route path="/admin" element={<AdminLayouts />}>
        <Route index element={<Dashboard />} /> {/* path: "/admin" */}
        {/* Add more admin routes like users, settings, etc. here */}
      </Route>
    </Routes>
  );
};

export default App;
