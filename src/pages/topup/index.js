import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../../components/layout";
import Balance from "../../components/balance";
import { useForm } from "react-hook-form";
import { MdOutlineMoney } from "react-icons/md";

const TopUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    // formState: { errors },
  } = useForm();

  const onSubmitTopup = (data) => {
    console.log(data);
  };
  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <Layout>
        <Balance username={"Nama Pengguna"} balance={"2000000"} />
        <section className="w-full md:py-8">
          <div>
            <h4>Silakan masukkan</h4>
            <h1 className="text-3xl font-semibold">Nominal TopUp</h1>
          </div>
          <form
            className="py-8 flex gap-4 w-full"
            onSubmit={handleSubmit(onSubmitTopup)}
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
                    min: 10000,
                    max: 1000000,
                    value: watch("fast_nominal"),
                  })}
                />
              </div>
              <button
                className="w-full py-3 bg-primary-color text-white-color rounded-sm"
                type="submit"
              >
                Top up
              </button>
            </div>
            <div className="grid grid-cols-3 w-2/4 gap-1">
              <label className="inline-flex items-center border border-gray-color rounded-sm h-fit w-full py-1 text-center">
                <input
                  type="radio"
                  className="hidden"
                  {...register("fast_nominal", {
                    value: 10000,
                  })}
                />
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 text-center w-full rounded-full focus:outline-none focus:ring focus:border-blue-300 active:bg-blue-700">
                  Rp10.000
                </button>
              </label>
              <label className="inline-flex items-center border border-gray-color rounded-sm h-fit w-full py-1 text-center">
                <input
                  type="radio"
                  className="hidden"
                  {...register("fast_nominal", {
                    value: 20000,
                  })}
                />
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 text-center w-full rounded-full focus:outline-none focus:ring focus:border-blue-300 active:bg-blue-700">
                  Rp20.000
                </button>
              </label>
              <label className="inline-flex items-center border border-gray-color rounded-sm h-fit w-full py-1 text-center">
                <input
                  type="radio"
                  className="hidden"
                  {...register("fast_nominal", {
                    value: 50000,
                  })}
                />
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 text-center w-full rounded-full focus:outline-none focus:ring focus:border-blue-300 active:bg-blue-700">
                  Rp50.000
                </button>
              </label>
              <label className="inline-flex items-center border border-gray-color rounded-sm h-fit w-full py-1 text-center">
                <input
                  type="radio"
                  className="hidden"
                  {...register("fast_nominal", {
                    value: 100000,
                  })}
                />
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 text-center w-full rounded-full focus:outline-none focus:ring focus:border-blue-300 active:bg-blue-700">
                  Rp100.000
                </button>
              </label>
              <label className="inline-flex items-center border border-gray-color rounded-sm h-fit w-full py-1 text-center">
                <input
                  type="radio"
                  className="hidden"
                  {...register("fast_nominal", {
                    value: 250000,
                  })}
                />
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 text-center w-full rounded-full focus:outline-none focus:ring focus:border-blue-300 active:bg-blue-700">
                  Rp250.000
                </button>
              </label>
              <label className="inline-flex items-center border border-gray-color rounded-sm h-fit w-full py-1 text-center">
                <input
                  type="radio"
                  className="hidden"
                  {...register("fast_nominal", {
                    value: 500000,
                  })}
                />
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 text-center w-full rounded-full focus:outline-none focus:ring focus:border-blue-300 active:bg-blue-700">
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
