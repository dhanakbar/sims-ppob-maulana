import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Layout from "../../components/layout";
import Balance from "../../components/balance";
import { useForm } from "react-hook-form";
import { MdOutlineMoney } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { topupBalance } from "../../store/actions/topupActions";
import Modal from "../../components/modal";
import { formatRupiah } from "../../helpers";
import { clearError } from "../../store/actions/topupActions";
import { useNavigate } from "react-router-dom";

const TopUp = () => {
  const { register, handleSubmit, watch, setValue } = useForm();
  const [fastNominal, setFastNominal] = useState(0);
  const [nominalValueTopup, setNominalValueTopup] = useState();
  const [confirmTopup, setConfirmTopup] = useState(false);
  const { isSuccessTopup, isFailTopup, topup } = useSelector(
    (state) => state.topup
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!watch("nominal")) {
      setValue("fast_nominal", null);
    }
  }, []);

  const nominalValue = watch("nominal");

  const handleLabelClick = (value) => {
    setFastNominal(value);
    setValue("nominal", value);
  };

  const handleNominalInputChange = (e) => {
    const newValue = e.target.value;
    setFastNominal(newValue);
    setValue("nominal", newValue);
  };

  const onSubmitTopup = (data) => {
    dispatch(topupBalance({ top_up_amount: data.nominal }));
    setConfirmTopup(false);
  };

  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <Layout>
        <Balance />
        <section className="w-full md:py-8">
          <div>
            <h4>Silakan masukkan</h4>
            <h1 className="text-3xl font-semibold">Nominal TopUp</h1>
          </div>
          <form
            className="py-8 flex gap-4 w-full xl:flex-row flex-col-reverse"
            onSubmit={handleSubmit(onSubmitTopup)}
          >
            {confirmTopup && (
              <Modal
                modalType={"confirm"}
                message={
                  <div className="text-center flex flex-col gap-2">
                    <p>Anda yakin untuk Top Up sebesar</p>
                    <h4 className="font-semibold text-2xl">
                      {formatRupiah(watch("nominal"))}
                    </h4>
                  </div>
                }
                actionButton={
                  <div className="flex flex-col gap-4">
                    <button
                      type="submit"
                      className="text-primary-color font-semibold mt-4"
                    >
                      Ya, Lanjutkan
                    </button>
                    <div
                      className="text-center"
                      onClick={() => setConfirmTopup(false)}
                    >
                      Batalkan
                    </div>
                  </div>
                }
              />
            )}
            {isSuccessTopup && (
              <Modal
                message={
                  <div className="text-center flex flex-col gap-2">
                    <p>Top Up sebesar</p>
                    <h4 className="font-semibold text-2xl">
                      {formatRupiah(watch("nominal"))}
                    </h4>
                    <p>berhasil!</p>
                  </div>
                }
                actionButton={
                  <button
                    className="text-primary-color font-semibold mt-4"
                    onClick={async () => {
                      dispatch(clearError());
                      await navigate("/");
                    }}
                  >
                    Kembali ke Beranda
                  </button>
                }
              />
            )}
            {isFailTopup && (
              <Modal
                message={
                  <div className="text-center flex flex-col gap-2">
                    <p>{topup?.data?.message}</p>
                    <p>Top Up sebesar</p>
                    <h4 className="font-semibold text-2xl">
                      {formatRupiah(watch("nominal"))}
                    </h4>
                    <p>Gagal</p>
                  </div>
                }
                actionButton={
                  <button
                    className="text-primary-color font-semibold mt-4"
                    onClick={async () => {
                      dispatch(clearError());
                      await navigate("/");
                    }}
                  >
                    Kembali ke Beranda
                  </button>
                }
              />
            )}
            <div className="flex flex-col gap-2 w-full">
              <div className="flex w-full">
                <div className="h-full border border-gray-color px-4 py-4 border-r-0 rounded-sm rounded-r-none">
                  <MdOutlineMoney className="text-gray-color" />
                </div>
                <input
                  className="border active:bg-none border-gray-color rounded-l-none rounded-sm border-l-0 placeholder:text-gray-color w-full"
                  placeholder="masukkan nominal Top up"
                  type="number"
                  {...register("nominal", {
                    required: true,
                    min: 9999,
                    max: 1000000,
                  })}
                  value={nominalValue ? nominalValue : nominalValueTopup}
                  onChange={handleNominalInputChange}
                />
              </div>
              <div
                disabled={!nominalValue || parseInt(nominalValue) < 9999}
                className={`w-full py-3 ${
                  nominalValue > 9999 ? "bg-primary-color" : "bg-gray-color"
                } text-white-color rounded-sm text-center`}
                onClick={() => setConfirmTopup(true)}
              >
                Top up
              </div>
            </div>
            <div className="grid grid-cols-4 xl:grid-cols-3 w-full xl:w-2/4 gap-2">
              <label
                className={`inline-flex items-center border border-gray-color rounded-sm h-full w-full text-center py-2 ${
                  fastNominal === 10000
                    ? "bg-primary-color text-white-color"
                    : ""
                }`}
                onClick={() => handleLabelClick(10000)}
              >
                <input
                  type="radio"
                  className="absolute z-10 h-[50px] w-[200px] opacity-0"
                  {...register("fast_nominal")}
                  value={10000}
                />
                <button className="text-center w-full relative z-0">
                  Rp10.000
                </button>
              </label>
              <label
                className={`inline-flex items-center border border-gray-color rounded-sm h-full w-full text-center py-2 ${
                  fastNominal === 20000
                    ? "bg-primary-color text-white-color"
                    : ""
                }`}
                onClick={() => handleLabelClick(20000)}
              >
                <input
                  type="radio"
                  className="absolute z-10 h-[50px] w-[200px] opacity-0"
                  {...register("fast_nominal")}
                  value={20000}
                />
                <button className="text-center w-full relative z-0">
                  Rp20.000
                </button>
              </label>
              <label
                className={`inline-flex items-center border border-gray-color rounded-sm h-full w-full text-center py-2 ${
                  fastNominal === 50000
                    ? "bg-primary-color text-white-color"
                    : ""
                }`}
                onClick={() => handleLabelClick(50000)}
              >
                <input
                  type="radio"
                  className="absolute z-10 h-[50px] w-[200px] opacity-0"
                  {...register("fast_nominal")}
                  value={50000}
                />
                <button className="text-center w-full relative z-0">
                  Rp50.000
                </button>
              </label>
              <label
                className={`inline-flex items-center border border-gray-color rounded-sm h-full w-full text-center py-2 ${
                  fastNominal === 100000
                    ? "bg-primary-color text-white-color"
                    : ""
                }`}
                onClick={() => handleLabelClick(100000)}
              >
                <input
                  type="radio"
                  className="absolute z-10 h-[50px] w-[200px] opacity-0"
                  {...register("fast_nominal")}
                  value={100000}
                />
                <button className="text-center w-full relative z-0">
                  Rp100.000
                </button>
              </label>
              <label
                className={`inline-flex items-center border border-gray-color rounded-sm h-full w-full text-center py-2 ${
                  fastNominal === 250000
                    ? "bg-primary-color text-white-color"
                    : ""
                }`}
                onClick={() => handleLabelClick(250000)}
              >
                <input
                  type="radio"
                  className="absolute z-10 h-[50px] w-[200px] opacity-0"
                  {...register("fast_nominal")}
                  value={250000}
                />
                <button className="text-center w-full relative z-0">
                  Rp250.000
                </button>
              </label>
              <label
                className={`inline-flex items-center border border-gray-color rounded-sm h-full w-full text-center py-2 ${
                  fastNominal === 500000
                    ? "bg-primary-color text-white-color"
                    : ""
                }`}
                onClick={() => handleLabelClick(500000)}
              >
                <input
                  type="radio"
                  className="absolute z-10 h-[50px] w-[200px] opacity-0"
                  {...register("fast_nominal")}
                  value={500000}
                />
                <button className="text-center w-full relative z-0">
                  Rp500.000
                </button>
              </label>
            </div>
          </form>
        </section>
      </Layout>
    </>
  );
};

export default TopUp;
