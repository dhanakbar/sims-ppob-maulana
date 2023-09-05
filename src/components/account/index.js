import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { BiSolidPencil } from "react-icons/bi";
import Layout from "../layout";
import { useForm } from "react-hook-form";
import { BsFillPersonFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../pages/store/actions/authActions";

const Account = () => {
  const [isCantBeEdited, setIsCantBeEdited] = useState(true);
  const { register, handleSubmit } = useForm();
  const { profile } = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  const onSubmitEdit = (data) => {
    console.log(data);
  };

  const onChangeEdit = () => {
    setIsCantBeEdited(!isCantBeEdited);
  };

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Account</title>
      </Helmet>
      <Layout>
        <form
          onSubmit={handleSubmit()}
          className="w-[1200px] mx-auto flex flex-col gap-4 items-center justify-center py-8"
        >
          <div>
            <img src="/assets/icons/profil_foto.png" width={120} alt="" />
            <input
              onClick={onChangeEdit}
              type="file"
              {...register("profule_image")}
              className="rounded-full bg-secondary-color w-8 h-8 absolute translate-x-24 -translate-y-7 z-20 opacity-0"
            />
            <button className="rounded-full border border-gray p-1 bg-white-color text-neutral-color hover:text-white-color hover:bg-neutral-color absolute translate-x-24 -translate-y-6">
              <BiSolidPencil />
            </button>
          </div>
          <div className="flex gap-6 flex-col w-3/4">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <div className="flex">
                <div
                  className={`text-gray-color h-full border border-gray-color px-4 py-3 border-r-0 rounded-r-none rounded-sm ${
                    isCantBeEdited && "bg-light-gray-color"
                  }`}
                >
                  @
                </div>
                <input
                  disabled={isCantBeEdited}
                  className="border active:bg-none border-gray-color rounded-l-none rounded-sm border-l-0 placeholder:text-gray-color w-full disabled:bg-light-gray-color"
                  placeholder="masukkan email anda"
                  type="email"
                  {...register("email", {
                    required: true,
                  })}
                  defaultValue={profile?.data?.email}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Nama Depan</label>
              <div className="flex">
                <div
                  className={`h-full border border-gray-color px-4 py-4 border-r-0 rounded-sm rounded-r-none ${
                    isCantBeEdited && "bg-light-gray-color"
                  }`}
                >
                  <BsFillPersonFill className="text-gray-color" />
                </div>
                <input
                  disabled={isCantBeEdited}
                  className="border active:bg-none border-gray-color rounded-l-none rounded-sm border-l-0 placeholder:text-gray-color w-full disabled:bg-light-gray-color"
                  placeholder="masukkan email anda"
                  type="text"
                  {...register("first_name", {
                    required: true,
                  })}
                  defaultValue={profile?.data?.first_name}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Nama Belakang</label>
              <div className="flex">
                <div
                  className={`h-full border border-gray-color px-4 py-4 border-r-0 rounded-sm rounded-r-none ${
                    isCantBeEdited && "bg-light-gray-color"
                  }`}
                >
                  <BsFillPersonFill className="text-gray-color" />
                </div>
                <input
                  disabled={isCantBeEdited}
                  className="border active:bg-none border-gray-color rounded-l-none rounded-sm border-l-0 placeholder:text-gray-color w-full disabled:bg-light-gray-color"
                  placeholder="masukkan email anda"
                  type="text"
                  {...register("last_name", {
                    required: true,
                  })}
                  defaultValue={profile?.data?.last_name}
                />
              </div>
            </div>
            {isCantBeEdited ? (
              <div className="flex flex-col w-full gap-4">
                <button
                  onClick={onChangeEdit}
                  className="border-2 border-primary-color py-3 rounded-sm text-primary-color font-semibold"
                >
                  Edit Profile
                </button>
                <button className="bg-primary-color py-3 rounded-sm  font-semibold text-white-color">
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex flex-col w-full gap-4">
                <button className="bg-primary-color py-3 rounded-sm  font-semibold text-white-color">
                  Simpan
                </button>
                <button
                  onClick={onChangeEdit}
                  className="border-2 border-primary-color py-3 rounded-sm text-primary-color font-semibold"
                >
                  Batalkan
                </button>
              </div>
            )}
          </div>
        </form>
      </Layout>
    </>
  );
};

export default Account;
