import React from "react";

const FormInput = ({
  label,
  type = "text",
  id,
  name,
  placeholder,
  value,
  onChange,
  error,
}) => {
  return (
    <div className="space-y-1">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>

      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full py-2 px-3 border-2 rounded-lg focus:outline-none
          ${
            error
              ? "border-red-500 focus:border-red-500"
              : "border-black/30 focus:border-[#D24343]"
          }`}
      />

      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default FormInput;
