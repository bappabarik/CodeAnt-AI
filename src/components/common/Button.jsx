const Button = ({ icon, label, className, onclick, type, ...props }) => {
  return (
    <button
      className={` ${className} font-bold rounded-md px-4 py-3 text-gray-700 focus:outline-none flex gap-2 items-center justify-left`}
      onClick={onclick}
      type={type}
      {...props}
    >
      {icon}
      {label}
    </button>
  );
};

export default Button;
