import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { MdLockOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import Alert from "../../components/alert";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { clearError, loginAction } from "../store/actions/authActions";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../../helpers";

const Login = () => {
  const navigate = useNavigate();
  const token = getCookie("nutech_token");
  const [isCheckPassword, setIsCheckPassword] = useState(false);
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();
  const { login, isSuccessLogin, isFailLogin } = useSelector(
    (state) => state.login
  );

  const dispatch = useDispatch();

  const closeAlert = () => {
    dispatch(clearError());
  };

  const onCheckPassword = () => {
    setIsCheckPassword(!isCheckPassword);
  };

  const onSubmitLogin = async (data) => {
    const credential = {
      email: data.email,
      password: data.password,
    };
    dispatch(loginAction(credential));
  };

  console.log(isSuccessLogin);

  useEffect(() => {
    isSuccessLogin && navigate("/");
    token && navigate("/");
  }, [isSuccessLogin, navigate, token]);

  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="h-screen flex">
        <form
          onSubmit={handleSubmit(onSubmitLogin)}
          className="flex flex-col gap-12 items-center justify-center h-full w-full xl:w-3/4 px-8 xl:px-32 py-48"
        >
          <div className="flex gap-2 items-center">
            <img src="/assets/icons/logo.png" alt="" width={48} height={48} />
            <h1 className="text-xl font-semibold">SIMS PPOB</h1>
          </div>
          <h1 className="text-center text-3xl font-semibold">
            Masuk atau buat akun <br /> untuk memulai
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
                <MdLockOutline className="text-gray-color" />
              </div>
              <input
                className="border active:bg-none border-gray-color rounded-l-none rounded-sm border-l-0 placeholder:text-gray-color w-full border-r-0 rounded-r-none"
                placeholder="masukkan password anda"
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
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-primary-color text-white-color rounded-sm"
          >
            Masuk
          </button>
          <p className="text-neutral-color">
            belum punya akun? registrasi{" "}
            <span className="text-primary-color font-semibold">
              <Link to={"/register"}>di sini</Link>
            </span>
          </p>
          {isFailLogin && (
            <Alert
              message={login?.data?.message}
              type="blue"
              onClose={closeAlert}
            />
          )}
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

export default Login;
