const TabSelector = ({ activeTab, onTabChange }) => (
  <div className="flex border-[1px] border-[rgba(213,215,218,1)] rounded-md mb-6 w-full items-center justify-center">
    {["SAAS", "Self Hosted"].map((tab) => (
      <button
        key={tab}
        className={`w-full px-6 py-4 md:text-xl rounded-md text-md transition-all duration-300 ease-in-out ${
          activeTab === tab
            ? " bg-blue-600 font-bold text-white"
            : "text-gray-500 font-bold bg-[#fafafa]"
        }`}
        onClick={() => onTabChange(tab)}
      >
        {tab}
      </button>
    ))}
  </div>
);

export default TabSelector;
