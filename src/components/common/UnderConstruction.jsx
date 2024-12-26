const UnderConstruction = ({ page }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800 border rounded-lg">
      <div className="animate-bounce mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 text-blue-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-11.707a1 1 0 00-1.414 0L7.586 8l-.293-.293a1 1 0 00-1.414 1.414l1 1a1 1 0 001.414 0l2.5-2.5a1 1 0 000-1.414zM11 10a1 1 0 012 0v2.586l1.293-1.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L9 12.586V10z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      <h1 className="text-4xl font-bold mb-2">
        {page} Page is Under Construction
      </h1>
      <p className="text-lg text-gray-600 animate-pulse">
        We’re working hard to bring this page to life. Stay tuned!
      </p>
    </div>
  );
};

export default UnderConstruction;
