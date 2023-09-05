import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/layout";
import { Helmet } from "react-helmet";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Home = () => {
  const [isShowBalance, setIsShowBalance] = useState(false);

  const servicesMenu = [
    {
      label: "PPB",
      link: "#",
      image: "/assets/icons/pbb.png",
    },
    {
      label: "Listrik",
      link: "#",
      image: "/assets/icons/listrik.png",
    },
    {
      label: "Pulsa",
      link: "#",
      image: "/assets/icons/pulsa.png",
    },
    {
      label: "PDAM",
      link: "#",
      image: "/assets/icons/pdam.png",
    },
    {
      label: "PGN",
      link: "#",
      image: "/assets/icons/pgn.png",
    },
    {
      label: "TV Langanan",
      link: "#",
      image: "/assets/icons/televisi.png",
    },
    {
      label: "Musik",
      link: "#",
      image: "/assets/icons/musik.png",
    },
    {
      label: "Voucer Game",
      link: "#",
      image: "/assets/icons/game.png",
    },
    {
      label: "Voucer Makanan",
      link: "#",
      image: "/assets/icons/voucher_makanan.png",
    },
    {
      label: "Kurban",
      link: "#",
      image: "/assets/icons/kurban.png",
    },
    {
      label: "Zakat",
      link: "#",
      image: "/assets/icons/zakat.png",
    },
    {
      label: "Paket Data",
      link: "#",
      image: "/assets/icons/paket_data.png",
    },
  ];

  const onShowBalance = () => {
    setIsShowBalance(!isShowBalance);
  };

  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <Layout>
        <section className="w-full flex">
          <div className="flex flex-col justify-between w-3/4">
            <img
              src="/assets/icons/profil_foto.png"
              width={64}
              height={64}
              alt=""
            />
            <div>
              <h4>Selamat Datang,</h4>
              <h1 className="text-3xl font-semibold">Nama Pengguna</h1>
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
              Rp.{" "}
              {isShowBalance ? <span>200.000.000</span> : <span>.....</span>}
            </h1>
            <p
              className="flex items-center gap-2 text-sm"
              onClick={onShowBalance}
            >
              Lihat saldo{" "}
              {isShowBalance ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </p>
          </div>
        </section>
        <section className="w-full mt-8">
          <div className={`w-full grid grid-cols-12 place-items-center gap-12`}>
            {servicesMenu.map((e, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col gap-2 w-full items-center cursor-pointer"
                >
                  <img src={e.image} className="w-full" alt="" />
                  <p className="text-xs text-center break-words">{e.label}</p>
                </div>
              );
            })}
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Home;
