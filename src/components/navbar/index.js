import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getCookie, isActivePathName } from "../../helpers";

const Navbar = () => {
  const token = getCookie("nutech_token");
  const navigate = useNavigate();
  useEffect(() => {
    !token && navigate("/login");
  }, [navigate, token]);
  return (
    <nav className="w-full">
      <div className="w-full flex justify-between px-8 md:px-32 border-b border-gray-color py-4">
        <Link to={"/"}>
          <div className="flex gap-2">
            <img src="/assets/icons/logo.png" width={24} height={24} alt="" />
            <p className="font-semibold">SIMS PPOB</p>
          </div>
        </Link>
        <ul className="flex gap-8 font-semibold">
          <li
            className={`${isActivePathName("/topup") && "text-primary-color"}`}
          >
            <Link to={"/topup"}>Top Up</Link>
          </li>
          <li
            className={`${
              isActivePathName("/transaction") && "text-primary-color"
            }`}
          >
            <Link to={"/transaction"}>Transaksi</Link>
          </li>
          <li
            className={`${
              isActivePathName("/account") && "text-primary-color"
            }`}
          >
            <Link to="/account">Akun</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
