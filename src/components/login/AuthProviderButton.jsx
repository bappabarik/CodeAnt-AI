const AuthProviderButton = ({ icon, label, onClick }) => (
  <button
    onClick={onClick}
    className="flex items-center justify-center rounded-lg border-[1px] border-[rgba(216,218,229,1)] md:w-[450px] w-[300px] h-[57px] text-center hover:bg-gray-100"
  >
    {icon}
    <span className="ml-4 font-semibold">{label}</span>
  </button>
);

export default AuthProviderButton;
