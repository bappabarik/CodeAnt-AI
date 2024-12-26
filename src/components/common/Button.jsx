const Button = ({ icon, label, className, onclick }) => {
  return (
    <button
      className={` ${className} font-bold rounded-md px-4 py-3 text-gray-700 focus:outline-none flex gap-2 items-center justify-left`}
      onClick={onclick}
    >
      {icon}
      {label}
    </button>
  );
};

export default Button;
