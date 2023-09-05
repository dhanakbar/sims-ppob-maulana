import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../../components/layout";
import Balance from "../../components/balance";
import { useForm } from "react-hook-form";
import { MdOutlineMoney } from "react-icons/md";

const Prepaid = () => {
  const { register, handleSubmit, watch } = useForm();

  const onSubmitPrepaid = (data) => {
    console.log(data);
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
            <h4>Pembayaran</h4>
            <div className="flex items-center gap-4">
              <img
                src="/assets/icons/listrik.png"
                width={32}
                height={32}
                alt=""
              />
              <h1 className="text-lg font-semibold">Listrik Prabayar</h1>
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
                  className="border active:bg-none border-gray-color border-gray-200 rounded-l-none rounded-sm border-l-0 placeholder:text-gray-color w-full"
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
                disabled={!watch("nominal")}
                className={`w-full py-3 ${
                  watch("nominal") ? "bg-primary-color" : "bg-gray-color"
                } text-white-color rounded-sm`}
                type="submit"
              >
                Top up
              </button>
            </div>
          </form>
        </section>
      </Layout>
    </>
  );
};

export default Prepaid;
