import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <h1 className="text-7xl font-bold text-red-500">404</h1>
      <p className="text-2xl font-semibold mt-4 text-gray-800">Page Not Found</p>
      <p className="text-gray-600 mt-2 text-center max-w-md">
        Sorry, the page you're looking for doesn't exist or you don't have access to it.
      </p>
      <Link to="/" className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all">
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
