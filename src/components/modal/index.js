import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";

const Modal = ({ message, actionButton, modalType }) => {
  return (
    <div className="bg-gray-color w-full h-full top-0 left-0 bg-opacity-70 absolute z-20">
      <div className="flex items-center justify-center w-80 flex-col gap-4 rounded-lg bg-white py-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {modalType === "confirm" ? (
          <img src="/assets/icons/logo.png" alt="" />
        ) : (
          <BsCheckCircleFill className="text-green-color" size={48} />
        )}
        <div>{message}</div>
        <div className="flex flex-col gap-">{actionButton}</div>
      </div>
    </div>
  );
};

export default Modal;
