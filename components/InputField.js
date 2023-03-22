import React from "react";

function InputField({ placeholder }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className=" p-2 text-sm bg-transparent border-b-2 w-[50%] "
    />
  );
}

export default InputField;
