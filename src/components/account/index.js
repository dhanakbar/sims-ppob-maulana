import React from "react";
import { Helmet } from "react-helmet";
import { BiSolidPencil } from "react-icons/bi";
import Layout from "../layout";
import { useForm } from "react-hook-form";
import { BsFillPersonFill } from "react-icons/bs";

const Account = () => {
  const { register, handleSubmit } = useForm();
  return (
    <>
      <Helmet>
        <title>Account</title>
      </Helmet>
      <Layout>
        <div className="w-[1200px] mx-auto flex flex-col gap-4 items-center justify-center py-8">
          <div>
            <img src="/assets/icons/profil_foto.png" width={120} alt="" />
            <button className="rounded-full border border-gray p-1 bg-white-color text-neutral-color hover:text-white-color hover:bg-neutral-color absolute translate-x-24 -translate-y-6">
              <BiSolidPencil />
            </button>
          </div>
          <div className="flex gap-6 flex-col w-3/4">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <div className="flex">
                <div className="text-gray-color h-full border border-gray-color px-4 py-3 border-r-0 rounded-r-none rounded-sm">
                  @
                </div>
                <input
                  className="border active:bg-none border-gray-color border-gray-200 rounded-l-none rounded-sm border-l-0 placeholder:text-gray-color w-full"
                  placeholder="masukkan email anda"
                  type="email"
                  {...register("email", {
                    required: true,
                  })}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Nama Depan</label>
              <div className="flex">
                <div className="h-full border border-gray-color px-4 py-4 border-r-0 rounded-sm rounded-r-none">
                  <BsFillPersonFill className="text-gray-color" />
                </div>
                <input
                  className="border active:bg-none border-gray-color border-gray-200 rounded-l-none rounded-sm border-l-0 placeholder:text-gray-color w-full"
                  placeholder="masukkan email anda"
                  type="text"
                  {...register("first_name", {
                    required: true,
                  })}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Nama Belakang</label>
              <div className="flex">
                <div className="h-full border border-gray-color px-4 py-4 border-r-0 rounded-sm rounded-r-none">
                  <BsFillPersonFill className="text-gray-color" />
                </div>
                <input
                  className="border active:bg-none border-gray-color border-gray-200 rounded-l-none rounded-sm border-l-0 placeholder:text-gray-color w-full"
                  placeholder="masukkan email anda"
                  type="text"
                  {...register("last_name", {
                    required: true,
                  })}
                />
              </div>
            </div>
            <button className="border-2 border-primary-color py-3 rounded-sm text-primary-color font-semibold">
              Edit Profile
            </button>
            <button className="bg-primary-color py-3 rounded-sm  font-semibold text-white-color">
              Logout
            </button>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Account;
