import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../component/layout/footer";
import OnImageText from "../component/common/onimagetext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { BiBasket, BiErrorAlt, BiPhoneCall } from "react-icons/bi";
import Navbar2 from "../component/layout/navbar2";

// images
import boat4 from "../public/boat4.jpeg";
import drone from "../public/drone.jpeg";
import ship from "../public/ship.jpeg";
import main1 from "../public/mainPage1.jpg";
import car from "../public/car.jpeg";
import drone6 from "../public/drone6.png";

const Fade = require("react-reveal/Fade");

const Home: NextPage = () => {
  const bullet = ["first", "second", "third"];

  return (
    <div>
      <Head>
        <title>Blue Whale</title>
        <meta name="title" property="og:title" content="BlueWhale" />
        <meta
          name="description"
          property="og:description"
          content={"소비자에게 가장 필요하고 적합한 맞춤형 드론 제공 기업"}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Exo+2:wght@200;400;500;700;800&family=IBM+Plex+Sans+KR:wght@300;400&family=Noto+Sans+KR:wght@300;400&family=PT+Sans:wght@700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <Navbar2 />

      <div className="bg-gray-100">
        <Swiper
          className="relative items-center mySwiper text-black"
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
            renderBullet: function (index, className) {
              return (
                '<div class="' +
                className +
                '"><span>' +
                bullet[index] +
                "</span></div>"
              );
            },
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
        >
          <SwiperSlide>
            <Image src={ship} alt="" width={1700} height={1000}></Image>
            <OnImageText
              smalltext={"혁신, 그리고"}
              name={"Blue Whale"}
              subtitle={"Innovatory Mobility"}
            />
          </SwiperSlide>
          <SwiperSlide className="relative">
            <Image
              src={main1}
              alt=""
              width={1700}
              height={1000}
              className="bg-cover "
            ></Image>

            <OnImageText
              smalltext={"혁신, 그리고"}
              name={"Blue Whale"}
              subtitle={"Innovatory Mobility"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={drone} alt="" width={1700} height={1000}></Image>
            <OnImageText
              smalltext={"혁신, 그리고"}
              name={"Blue Whale"}
              subtitle={"Innovatory Mobility"}
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <section className="bg-gray-100">
        <div className="text-center pt-3">
          <iframe
            className="items-center mx-auto my-10"
            width="100%"
            height={700}
            src="https://www.youtube.com/embed/tU8BuomMd-4"
            title="YouTube video player"
            frameBorder="2"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section className="onImageText">
        <Fade>
          <div className="container text-center mx-auto p-4 my-5 mb-5 bg-white">
            <h1 className="ibm text-black font-medium text-3xl  my-5">
              분야별 Blue Whale 제품 둘러보기
            </h1>

            <div className="relative grid grid-cols-2 gap-3 place-items-stretch pb-10">
              <div className="absolute z-1 inset-x-0 top-20 h-3 text-white right-30">
                <h2 className="text-xl my-2 ibm">선박</h2>
                <p className="font-semibold text-6xl Exo 2 my-2">선박</p>
                <p className="font-light text-3xl Exo 2 my-2">선박</p>
              </div>

              <Image src={drone} alt="" width={300} height={300}></Image>
              <Image src={car} alt="" width={300} height={300}></Image>
              <Image src={boat4} alt="" width={300} height={300}></Image>
              <Image src={drone6} alt="" width={300} height={300}></Image>
            </div>
          </div>
        </Fade>
      </section>

      <section className="ibm my-5 text-center pb-10">
        <Fade>
          <h1 className="text-black text-3xl ibm my-5">블루웨일은 </h1>
          <h2 className="text-black text-2xl ibm my-5">
            항공, 해상의 이동수단을
          </h2>
          <h2 className="text-black text-2xl font-sans-kr my-5">
            더 안전하게 더 효율적으로
          </h2>
          <h2 className="text-black text-2xl font-sans-kr my-5">
            환경을 생각하며 새롭게 혁신합니다{" "}
          </h2>
        </Fade>
      </section>

      <section>
        <div className="wrapper bg-gray-100">
          <div className="mx-10 px-10 py-10 items-center ">
            <div className="flex p-10 items-center justify-center bg-gray-100 text-black ">
              <div className="mx-auto items-center">
                <BiBasket size="50" className="mx-auto my-3" />
                <h1 className="mx-auto ibm font-bold text-2xl ">구매처안내</h1>
              </div>
              <div className="mx-auto">
                <BiPhoneCall size="50" className="mx-auto my-3" />
                <h1 className="mx-auto ibm font-bold text-2xl">고객지원</h1>
              </div>
              <div className="mx-auto">
                <BiErrorAlt size="50" className="mx-auto my-3" />
                <h1 className="mx-auto ibm font-bold text-2xl">비행안전</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
