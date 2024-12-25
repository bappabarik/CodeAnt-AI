const StatCard = ({ children }) => {
  return (
    <div className="bg-white drop-shadow-[0_0_24px_rgba(8,23,53,0.16)] rounded-3xl md:py-4">
      {children}
    </div>
  );
};

export default StatCard;
