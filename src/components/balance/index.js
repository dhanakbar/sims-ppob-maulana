import React, { useEffect, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getBalance } from "../../store/actions/balanceActions";
import { formatRupiah } from "../../helpers";
import { getProfile } from "../../store/actions/userActions";

const Balance = () => {
  const { balance } = useSelector((state) => state.balance);
  const { profile } = useSelector((state) => state.profile);
  const [isShowBalance, setIsShowBalance] = useState(false);
  const dispatch = useDispatch();

  const onShowBalance = () => {
    setIsShowBalance(!isShowBalance);
  };

  useEffect(() => {
    dispatch(getBalance());
    dispatch(getProfile());
  }, [dispatch]);

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
          <h1 className="text-3xl font-semibold">
            {profile?.data?.first_name}
          </h1>
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
          {isShowBalance ? (
            <span>{formatRupiah(balance?.data?.balance)}</span>
          ) : (
            <span>Rp * * * * *</span>
          )}
        </h1>
        <p className="flex items-center gap-2 text-sm" onClick={onShowBalance}>
          {isShowBalance ? "Tutup" : "Lihat"} saldo{" "}
          {isShowBalance ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
        </p>
      </div>
    </section>
  );
};

export default Balance;
