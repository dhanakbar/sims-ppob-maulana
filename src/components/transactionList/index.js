import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const TransactionList = ({ nominal, status, date, time }) => {
  return (
    <div className="w-full flex justify-between px-8 py-4 border rounded-lg border-gray-color">
      <div className="flex flex-col gap-2">
        <div
          className={`${
            status.toLowerCase() === "top up saldo"
              ? "text-green-color"
              : "text-red-color"
          } flex items-center gap-2`}
        >
          <p>
            {status.toLowerCase() === "top up saldo" ? (
              <FaPlus size={10} />
            ) : (
              <FaMinus size={10} />
            )}
          </p>
          <p className="font-bold text-2xl">Rp. {nominal}</p>
        </div>
        <div className="flex gap-2 text-gray-color text-sm">
          <p>{date}</p>
          <p>{time} WIB</p>
        </div>
      </div>
      <p className="text-sm font-semibold">{status}</p>
    </div>
  );
};

export default TransactionList;
