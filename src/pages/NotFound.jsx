import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 w-full">
      <div className="text-6xl font-bold text-gray-800 animate-bounce">404</div>
      <h1 className="mt-4 text-2xl font-semibold text-gray-700">
        Page Not Found
      </h1>
      <p className="mt-2 text-gray-500">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-2 text-white bg-blue-500 rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
