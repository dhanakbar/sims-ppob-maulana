import React from "react";
import Layout from "../../components/layout";
import { Helmet } from "react-helmet";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import Balance from "../../components/balance";

const Home = () => {
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

  const banners = [
    "/assets/images/banner_1.png",
    "/assets/images/banner_2.png",
    "/assets/images/banner_3.png",
    "/assets/images/banner_4.png",
    "/assets/images/banner_5.png",
  ];

  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <Layout>
        <Balance username={"Nama Pengguna"} balance={"2000000"} />
        <section className="w-full md:py-8">
          <div
            className={`w-full grid grid-cols-4 sm:grid-cols-4 md:grid-cols-8 xl:grid-cols-12 place-items-center gap-4 md:gap-12`}
          >
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
        <section className="w-full py-8">
          <h4 className="font-semibold text-sm">Temukan promo menarik</h4>
          <div className="py-4">
            <Swiper
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 8,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 8,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                },
                1440: {
                  slidesPerView: 4,
                  spaceBetween: 32,
                },
              }}
            >
              {banners.map((e, idx) => {
                return (
                  <SwiperSlide key={idx}>
                    <img className="w-full" src={e} alt="" />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Home;
