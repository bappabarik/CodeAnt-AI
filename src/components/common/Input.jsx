import React, { useId } from "react";

const Input = React.forwardRef(
  ({ label, type = "text", className = "", ...props }, ref) => {
    const id = useId();
    return (
      <div className=" w-full text-left">
        {label && (
          <label className="inline-block mb-1 pl-1 py-2" htmlFor={id}>
            {label}
          </label>
        )}
        <input
          type={type}
          className={`block w-full pl-10 pr-4 py-2 text-[rgba(65,70,81,1)] bg-white border border-[rgba(213,215,218,1)] shadow-sm rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none focus:border-blue-500 ${className}`}
          ref={ref}
          {...props}
          id={id}
        />
      </div>
    );
  }
);

export default Input;
