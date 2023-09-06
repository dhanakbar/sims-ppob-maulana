import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { BiSolidPencil } from "react-icons/bi";
import Layout from "../../components/layout";
import { useForm } from "react-hook-form";
import { BsFillPersonFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  getProfile,
  updateProfile,
  clearError,
  updateProfilePicture,
} from "../../store/actions/userActions";
import { destroyCookie } from "nookies";
import { ToastContainer, toast } from "react-toastify";
import Alert from "../../components/alert";
import parse from "html-react-parser";

import "react-toastify/dist/ReactToastify.css";

const Account = () => {
  const [onErrorProfilePicture, setOnErrorProfilePicture] = useState(false);
  const [isCantBeEdited, setIsCantBeEdited] = useState(true);
  const {
    formState: { errors: errorsProfilePict },
    setError: setErrorProfilePict,
    clearErrors: clearErrorProfilePict,
  } = useForm();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const { profile } = useSelector((state) => state.profile);
  const { profileUpdate, isSuccessProfileUpdate } = useSelector(
    (state) => state.profileUpdate
  );
  const { pictureUpdate, isSuccessPictureUpdate, isFailPictureUpdate } =
    useSelector((state) => state.pictureUpdate);
  const dispatch = useDispatch();

  const onSubmitEdit = (data) => {
    const newProfile = {
      first_name: data?.first_name || profile?.data?.first_name,
      last_name: data?.last_name || profile?.data?.last_name,
    };
    dispatch(updateProfile(newProfile));
    setIsCantBeEdited(!isCantBeEdited);
  };

  const closeAlert = () => {};

  const onChangeEdit = () => {
    setIsCantBeEdited(!isCantBeEdited);
  };

  const onLogout = async () => {
    await destroyCookie(undefined, "nutech_token");
    window.location.reload();
  };

  const onCancelEdit = () => {
    setValue("first_name", profile?.data?.first_name);
    setValue("last_name", profile?.data?.last_name);
    setIsCantBeEdited(!isCantBeEdited);
  };

  const onChangeProfilePicture = (e) => {
    const profilePicture = e.target.files[0];

    if (profilePicture) {
      if (!["image/jpeg", "image/png"].includes(profilePicture?.type)) {
        setErrorProfilePict("profile_picture", {
          message: "Format file harus JPEG/PNG",
        });
      } else if (profilePicture?.size > 100000) {
        setErrorProfilePict("profile_picture", {
          message: "Foto harus kurang dari 100kb",
        });
      } else {
        clearErrorProfilePict("profile_picture");
        const formData = new FormData();
        formData.append("profilePicture", profilePicture);
        dispatch(updateProfilePicture({ formData }));
      }
    }
  };

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch, register, clearError]);

  useEffect(() => {
    setValue("first_name", profile?.data?.first_name);
    setValue("last_name", profile?.data?.last_name);
  });

  useEffect(() => {
    isSuccessProfileUpdate && toast.success("Berhasil Update Profil");
    isSuccessPictureUpdate && toast.success("Berhasil Update Foto Profil");
    isSuccessProfileUpdate && dispatch(clearError());
    dispatch(getProfile());
  }, [isSuccessProfileUpdate, isSuccessPictureUpdate, clearError]);

  useEffect(() => {
    isFailPictureUpdate && toast.error("Gagal update Foto Profil");
  }, [isFailPictureUpdate]);

  return (
    <>
      <Helmet>
        <title>Account</title>
      </Helmet>
      <Layout>
        <div className="max-w-[1200px] mx-auto flex flex-col gap-4 items-center justify-center py-8">
          <ToastContainer />
          <div>
            <img
              className="rounded-full border w-[120px] h-[120px]"
              src={
                !onErrorProfilePicture
                  ? profile?.data?.profile_image
                    ? profile?.data?.profile_image
                    : "/assets/icons/profil_foto.png"
                  : "/assets/icons/profil_foto.png"
              }
              onError={() => {
                setOnErrorProfilePicture(true);
              }}
              width={120}
              height={120}
              alt=""
            />
            <input
              type="file"
              name="profile_picture"
              onChange={onChangeProfilePicture}
              className="rounded-full bg-secondary-color w-8 h-8 absolute translate-x-24 -translate-y-7 z-20 opacity-0"
            />
            <div className="rounded-full border border-gray p-1 bg-white-color text-neutral-color hover:text-white-color hover:bg-neutral-color absolute translate-x-24 -translate-y-6">
              <BiSolidPencil />
            </div>
          </div>
          <h4 className="mt-2 text-3xl font-bold">
            {profile?.data?.first_name + " " + profile?.data?.last_name}
          </h4>
          {errorsProfilePict?.profile_picture && (
            <div className="w-3/4">
              <Alert
                message={errorsProfilePict?.profile_picture?.message}
                onClose={closeAlert}
              />
            </div>
          )}
          <form
            form
            onSubmit={handleSubmit(onSubmitEdit)}
            className="flex gap-6 flex-col w-3/4"
          >
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <div className="flex">
                <div
                  className={`text-gray-color h-full border border-gray-color px-4 py-3 border-r-0 rounded-r-none rounded-sm bg-light-gray-color`}
                >
                  @
                </div>
                <input
                  disabled={true}
                  className="border active:bg-none border-gray-color rounded-l-none rounded-sm border-l-0 placeholder:text-gray-color w-full disabled:bg-light-gray-color"
                  placeholder="masukkan email anda"
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
                    required: "Wajib diisi",
                    value: profile?.data?.first_name,
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
                    required: "Wajib diisi",
                    value: profile?.data?.last_name,
                  })}
                  defaultValue={profile?.data?.last_name}
                />
              </div>
            </div>
            {isCantBeEdited ? (
              <div className="flex flex-col w-full gap-4">
                <div
                  onClick={onChangeEdit}
                  className="border-2 text-center border-primary-color py-3 rounded-sm text-primary-color font-semibold"
                >
                  Edit Profile
                </div>
                <button
                  onClick={onLogout}
                  className="bg-primary-color py-3 rounded-sm  font-semibold text-white-color"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex flex-col w-full gap-4">
                <button
                  type="submit"
                  className="bg-primary-color py-3 rounded-sm  font-semibold text-white-color"
                >
                  Simpan
                </button>
                <div
                  onClick={onCancelEdit}
                  className="text-center border-2 border-primary-color py-3 rounded-sm text-primary-color font-semibold"
                >
                  Batalkan
                </div>
              </div>
            )}
          </form>
        </div>
      </Layout>
    </>
  );
};

export default Account;
