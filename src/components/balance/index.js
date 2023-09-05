import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Balance = ({ username, balance }) => {
  const [isShowBalance, setIsShowBalance] = useState(false);

  const onShowBalance = () => {
    setIsShowBalance(!isShowBalance);
  };

  return (
    <section className="w-full flex flex-col md:flex-row py-8 gap-4">
      <div className="flex flex-col justify-between w-3/4">
        <img
          src="/assets/icons/profil_foto.png"
          width={64}
          height={64}
          alt=""
        />
        <div>
          <h4>Selamat Datang,</h4>
          <h1 className="text-3xl font-semibold">{username}</h1>
        </div>
      </div>
      <div
        className="p-4 rounded-lg w-full h-full bg-primary-color text-white-color flex flex-col gap-4 bg-no-repeat bg-center bg-cover"
        style={{
          backgroundImage: "url('/assets/images/background_saldo.png')",
        }}
      >
        <p>Saldo anda</p>
        <h1 className="text-4xl font-semibold">
          Rp. {isShowBalance ? <span>{balance}</span> : <span>.....</span>}
        </h1>
        <p className="flex items-center gap-2 text-sm" onClick={onShowBalance}>
          Lihat saldo{" "}
          {isShowBalance ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
        </p>
      </div>
    </section>
  );
};

export default Balance;
