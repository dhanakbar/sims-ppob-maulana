import React from "react";
import { MdOutlineClose } from "react-icons/md";
const Alert = ({ custom_style, message, onCloseAlert }) => {
  return (
    <div
      className={`flex justify-between items-center w-full py-2 px-4 text-primary-color bg-secondary-color rounded-sm ${custom_style}`}
    >
      <p>{message}</p>
      <MdOutlineClose onClick={onCloseAlert} className="text-primary-color" />
    </div>
  );
};

export default Alert;
