import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { formatRupiah } from "../../helpers";

const TransactionList = ({
  nominal,
  description,
  date,
  time,
  transaction_type,
}) => {
  return (
    <div className="w-full flex justify-between px-8 py-4 border rounded-lg border-gray-color">
      <div className="flex flex-col gap-2">
        <div
          className={`${
            transaction_type === "TOPUP" ? "text-green-color" : "text-red-color"
          } flex items-center gap-2`}
        >
          <p>
            {transaction_type === "TOPUP" ? (
              <FaPlus size={10} />
            ) : (
              <FaMinus size={10} />
            )}
          </p>
          <p className="font-bold text-2xl">{formatRupiah(nominal)}</p>
        </div>
        <div className="flex gap-2 text-gray-color text-sm">
          <p>{date}</p>
          <p>{time}</p>
        </div>
      </div>
      <p className="text-sm font-semibold">{description}</p>
    </div>
  );
};

export default TransactionList;
