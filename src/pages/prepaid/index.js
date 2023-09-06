import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Layout from "../../components/layout";
import Balance from "../../components/balance";
import { useForm } from "react-hook-form";
import { MdOutlineMoney } from "react-icons/md";
import axios from "axios";
import { formatRupiah, getCookie } from "../../helpers";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  payTransactionAction,
  clearError,
} from "../../store/actions/transactionActions";
import Modal from "../../components/modal";

const Prepaid = () => {
  const navigate = useNavigate();
  const {
    state: { service_name, service_code, image, service_tariff },
  } = useLocation();
  const { register, handleSubmit, watch } = useForm();
  const [service, setService] = useState([]);
  const { payTransaction, isSuccessPayTransaction, isFailPayTransaction } =
    useSelector((state) => state.payTransaction);
  const dispatch = useDispatch();

  const onSubmitPrepaid = (data) => {
    dispatch(payTransactionAction({ service_code }));
  };

  const fetchServices = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_PUBLIC_API}services`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getCookie("nutech_token")}`,
          },
        }
      );
      setService(response?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <Layout>
        <Balance />
        {isFailPayTransaction && (
          <Modal
            modalType={"failed"}
            message={
              <div className="text-center flex flex-col gap-2">
                <p>{payTransaction?.data?.message}</p>
                <p>Pembayaran {service_name.toLowerCase()} sebesar</p>
                <h4 className="font-semibold text-2xl">
                  {formatRupiah(watch("nominal"))}
                </h4>
                <p>Gagal</p>
              </div>
            }
            actionButton={
              <button
                className="text-primary-color font-semibold"
                onClick={() => {
                  dispatch(clearError());
                  navigate("/");
                }}
              >
                Kembali Ke Beranda
              </button>
            }
          />
        )}
        {isSuccessPayTransaction && (
          <Modal
            message={
              <div className="text-center flex flex-col gap-2">
                <p>Pembayaran {service_name.toLowerCase()} sebesar</p>
                <h4 className="font-semibold text-2xl">
                  {formatRupiah(watch("nominal"))}
                </h4>
                <p>Berhasil</p>
              </div>
            }
            actionButton={
              <button
                className="text-primary-color font-semibold"
                onClick={() => {
                  dispatch({
                    type: "CLEAR_ERRORS",
                  });
                  navigate("/");
                }}
              >
                Kembali Ke Beranda
              </button>
            }
          />
        )}
        <section className="w-full md:py-8">
          <div>
            <h4>Pembayaran</h4>
            <div className="flex items-center gap-4">
              <img src={image} width={32} height={32} alt="" />
              <h1 className="text-lg font-semibold">{service_name}</h1>
            </div>
          </div>
          <form
            className="py-8 flex gap-4 w-full xl:flex-row flex-col-reverse"
            onSubmit={handleSubmit(onSubmitPrepaid)}
          >
            <div className="flex flex-col gap-2 w-full">
              <div className="flex w-full">
                <div className="h-full border border-gray-color px-4 py-4 border-r-0 rounded-sm rounded-r-none">
                  <MdOutlineMoney className="text-gray-color" />
                </div>
                <input
                  value={service_tariff}
                  className="border active:bg-none border-gray-color rounded-l-none rounded-sm border-l-0 placeholder:text-gray-color w-full"
                  placeholder="masukkan nominal Top up"
                  type="number"
                  {...register("nominal", {
                    required: true,
                    min: 9999,
                    max: 1000000,
                  })}
                />
              </div>
              <button
                disabled={!service_tariff}
                className={`w-full py-3 ${
                  service_tariff ? "bg-primary-color" : "bg-gray-color"
                } text-white-color rounded-sm`}
                type="submit"
              >
                Bayar
              </button>
            </div>
          </form>
        </section>
      </Layout>
    </>
  );
};

export default Prepaid;
