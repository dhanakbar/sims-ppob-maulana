import React, { useEffect, useState } from "react";
import Layout from "../../components/layout";
import { Helmet } from "react-helmet";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Balance from "../../components/balance";
import axios from "axios";
import { convertToSlug, getCookie } from "../../helpers";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [banner, setBanner] = useState([]);
  const [service, setService] = useState([]);
  const servicesMenu = [
    {
      label: "PPB",
      image: "/assets/icons/pbb.png",
    },
    {
      label: "Listrik",
      image: "/assets/icons/listrik.png",
    },
    {
      label: "PDAM",
      image: "/assets/icons/pdam.png",
    },
    {
      label: "Pulsa",
      image: "/assets/icons/pulsa.png",
    },
    {
      label: "PGN",
      image: "/assets/icons/pgn.png",
    },
    {
      label: "Musik",
      image: "/assets/icons/musik.png",
    },
    {
      label: "TV Langanan",
      image: "/assets/icons/televisi.png",
    },
    {
      label: "Paket Data",
      image: "/assets/icons/paket_data.png",
    },
    {
      label: "Voucer Game",
      image: "/assets/icons/game.png",
    },
    {
      label: "Voucer Makanan",
      image: "/assets/icons/voucher_makanan.png",
    },
    {
      label: "Kurban",
      image: "/assets/icons/kurban.png",
    },
    {
      label: "Zakat",
      image: "/assets/icons/zakat.png",
    },
  ];

  const banners = [
    "/assets/images/banner_1.png",
    "/assets/images/banner_2.png",
    "/assets/images/banner_3.png",
    "/assets/images/banner_4.png",
    "/assets/images/banner_5.png",
  ];

  const fetchBanner = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_PUBLIC_API}banner`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getCookie("nutech_token")}`,
          },
        }
      );
      setBanner(response?.data);
    } catch (error) {
      console.log(error);
    }
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
    fetchBanner();
    fetchServices();
  }, []);

  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <Layout>
        <Balance />
        <section className="w-full md:py-8">
          <div
            className={`w-full grid grid-cols-4 sm:grid-cols-4 md:grid-cols-8 xl:grid-cols-12 place-items-stretch gap-4 md:gap-12`}
          >
            {service?.data?.map((e, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col gap-2 w-full items-center cursor-pointer"
                  onClick={() =>
                    navigate(`/prepaid/${convertToSlug(e?.service_code)}`, {
                      state: {
                        image: servicesMenu[index].image,
                        service_code: e?.service_code,
                        service_name: e?.service_name,
                        service_tariff: e?.service_tariff,
                      },
                    })
                  }
                >
                  <img
                    src={servicesMenu[index].image}
                    className="w-full"
                    alt=""
                  />
                  <p className="text-xs text-center break-words">
                    {e?.service_name}
                  </p>
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
              {banner?.data?.map((e, idx) => {
                return (
                  <SwiperSlide key={idx}>
                    <img className="w-full" src={banners[idx]} alt="" />
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
