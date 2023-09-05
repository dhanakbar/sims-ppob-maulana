import React, { useState } from "react";
const Alert = ({ custom_style, message, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  const closeAlert = () => {
    setIsVisible(false);
    onClose();
  };

  return isVisible ? (
    <div
      className={`px-4 py-2 w-full flex justify-between bg-secondary-color rounded-md text-primary-color mt-auto`}
      role="alert"
    >
      <p>{message}</p>
      <button onClick={closeAlert}>x</button>
    </div>
  ) : null;
};

export default Alert;
