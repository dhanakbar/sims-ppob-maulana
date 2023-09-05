import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { MdLockOutline } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Alert from "../../components/alert";
import { useForm } from "react-hook-form";

const Register = () => {
  const [isCheckPassword, setIsCheckPassword] = useState(false);
  const [isCheckConfirmPassword, setIsCheckConfirmPassword] = useState(false);
  const [closeAlert, setCloseAlert] = useState(true);

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const onCheckPassword = () => {
    setIsCheckPassword(!isCheckPassword);
  };

  const onCheckConfirmPassword = () => {
    setIsCheckConfirmPassword(!isCheckConfirmPassword);
  };

  const onCloseAlert = () => {
    setCloseAlert(false);
  };

  const onSubmitLogin = (data) => {
    console.log(data);
  };

  return (
    <>
      <Helmet>
        <title>Registrasi</title>
      </Helmet>
      <div className="h-screen flex">
        <form
          onSubmit={handleSubmit(onSubmitLogin)}
          className="flex flex-col gap-12 items-center justify-center h-full w-full xl:w-3/4 px-8 xl:px-32"
        >
          <div className="flex gap-2 items-center">
            <img src="/assets/icons/logo.png" alt="" width={48} height={48} />
            <h1 className="text-xl font-semibold">SIMS PPOB</h1>
          </div>
          <h1 className="text-center text-3xl font-semibold">
            Lengkapi data <br /> untuk membuat akun
          </h1>
          <div className="w-full flex flex-col gap-8">
            <div className="flex">
              <div className="text-gray-color h-full border border-gray-color px-4 py-3 border-r-0 rounded-r-none rounded-sm">
                @
              </div>
              <input
                className="border active:bg-none border-gray-color rounded-l-none rounded-sm border-l-0 placeholder:text-gray-color w-full"
                placeholder="masukkan email anda"
                type="email"
                {...register("email", {
                  required: true,
                })}
              />
            </div>
            <div className="flex">
              <div className="h-full border border-gray-color px-4 py-4 border-r-0 rounded-sm rounded-r-none">
                <BsFillPersonFill className="text-gray-color" />
              </div>
              <input
                className="border active:bg-none border-gray-color rounded-l-none rounded-sm border-l-0 placeholder:text-gray-color w-full"
                placeholder="masukkan nama depan"
                type="text"
                {...register("first_name", {
                  required: true,
                })}
              />
            </div>
            <div className="flex">
              <div className="h-full border border-gray-color px-4 py-4 border-r-0 rounded-sm rounded-r-none">
                <BsFillPersonFill className="text-gray-color" />
              </div>
              <input
                className="border active:bg-none border-gray-color rounded-l-none rounded-sm border-l-0 placeholder:text-gray-color w-full"
                placeholder="masukkan nama belakang"
                type="text"
                {...register("last_name", {
                  required: true,
                })}
              />
            </div>
            <div className="flex">
              <div className="h-full border border-gray-color px-4 py-4 border-r-0 rounded-sm rounded-r-none">
                <MdLockOutline className="text-gray-color" />
              </div>
              <input
                className="border active:bg-none border-gray-color rounded-l-none rounded-sm border-l-0 placeholder:text-gray-color w-full border-r-0 rounded-r-none"
                placeholder="buat password"
                type={isCheckPassword ? "text" : "password"}
                {...register("password", {
                  required: true,
                })}
              />
              <div
                className="text-gray-400 border border-gray-color flex items-center justify-center px-4 border-l-0 rounded-l-none rounded-sm"
                onClick={onCheckPassword}
              >
                {isCheckPassword ? (
                  <AiOutlineEye size={16} className="text-gray-color" />
                ) : (
                  <AiOutlineEyeInvisible
                    size={16}
                    className="text-gray-color"
                  />
                )}
              </div>
            </div>
            <div className="flex">
              <div className="h-full border border-gray-color px-4 py-4 border-r-0 rounded-sm rounded-r-none">
                <MdLockOutline className="text-gray-color" />
              </div>
              <input
                className="border active:bg-none border-gray-color rounded-l-none rounded-sm border-l-0 placeholder:text-gray-color w-full border-r-0 rounded-r-none"
                placeholder="konfirmasi password"
                type={isCheckConfirmPassword ? "text" : "password"}
                {...register("confirm_password", {
                  required: true,
                })}
              />
              <div
                className="text-gray-400 border border-gray-color flex items-center justify-center px-4 border-l-0 rounded-l-none rounded-sm"
                onClick={onCheckConfirmPassword}
              >
                {isCheckConfirmPassword ? (
                  <AiOutlineEye size={16} className="text-gray-color" />
                ) : (
                  <AiOutlineEyeInvisible
                    size={16}
                    className="text-gray-color"
                  />
                )}
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-primary-color text-white-color rounded-sm"
          >
            Masuk
          </button>
          <p className="text-neutral-color">
            sudah punya akun? login{" "}
            <span className="text-primary-color font-semibold">
              <Link to={"/login"}>di sini</Link>
            </span>
          </p>
          <Alert message={"password yang anda masukkan salah"} />
        </form>
        <div
          className="h-full w-full bg-no-repeat bg-cover bg-center hidden xl:block"
          style={{
            backgroundImage: "url('/assets/images/ilustrasi_login.png')",
          }}
        ></div>
      </div>
    </>
  );
};

export default Register;
