import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../component/layout/navbar";
import { Fragment, useState } from "react";
import Footer from "../component/layout/footer";
import boat2 from "../public/boat2.jpeg";
import boat3 from "../public/boat3.jpeg";
import boat4 from "../public/boat4.jpeg";
import yacht1 from "../public/yacht1.jpeg";
import yacht2 from "../public/yacht2.jpeg";
import yacht3 from "../public/yacht3.jpeg";
import main1 from "../public/mainPage1.jpg";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import OnImageText from "../component/common/onimagetext";

const Home: NextPage = () => {
  const [imageIndex, setImageIndex] = useState(1);

  const onClickLeft = () => {
    setImageIndex(imageIndex - 1);
    //imageIndex에 해당하는 사진 보여주기
    //나누기 이미지 개수
    console.log(imageIndex);
  };
  const onClickRight = () => {
    setImageIndex(imageIndex + 1);
    //imageIndex에 해당하는 사진 보여주기
    //나누기 이미지 개수
    console.log(imageIndex);
  };

  return (
    <Fragment>
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
          href="https://fonts.googleapis.com/css2?family=Exo+2:wght@200;400;500;700;800&family=PT+Sans:wght@700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Navbar />

      <section>
        <div className="relative text-center bg-gray-50">
          <Image
            src={main1}
            alt=""
            height={750}
            width={1400}
            className="bg-cover "
          ></Image>

          <OnImageText
            smalltext={"혁신, 그리고"}
            name={"Blue Whale"}
            subtitle={"Innovatory Mobility"}
          />
        </div>
      </section>

      <section>
        <div className="text-center pt-3">
          <iframe
            className="items-center mx-auto my-10"
            width="100%"
            height="600"
            src="https://www.youtube.com/embed/tU8BuomMd-4"
            title="YouTube video player"
            frameBorder="2"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
      {/* <section className="text-center p-4 py-5 bg-white">
        <h1 className="text-black text-3xl font-sans-kr my-5">
          분야별 Blue Whale 제품 둘러보기
        </h1>
        <div className="relative px-10 py-3 mx-20 grid grid-cols-3 gap-3">
          <Image src={yacht1} alt="" width={300} height={300}></Image>
          <Image src={yacht2} alt="" width={300} height={300}></Image>
          <Image src={yacht3} alt="" width={300} height={300}></Image>
        </div>
      </section> */}

      <section>
        <div className="container text-center mx-auto p-4 my-5 mb-5 bg-white">
          <h1 className="text-black text-3xl font-sans-kr my-5">
            분야별 Blue Whale 제품 둘러보기
          </h1>
          <div className="relative grid grid-cols-2 gap-3 place-items-stretch">
            <Image src={yacht2} alt="" width={300} height={300}></Image>
            <OnImageText />
            <Image src={boat4} alt="" width={300} height={300}></Image>
            <OnImageText />
            <Image src={boat2} alt="" width={300} height={300}></Image>
            <Image src={boat3} alt="" width={300} height={300}></Image>
          </div>
          <h1 className="text-black text-3xl font-sans-kr my-5">블루웨일은 </h1>
          <h2 className="text-black text-2xl font-sans-kr my-5">
            항공, 해상의 이동수단을 더 안전하게 더 효율적으로{" "}
          </h2>
          <h2 className="text-black text-2xl font-sans-kr my-5">
            더 안전하게 더 효율적으로{" "}
          </h2>
          <h2 className="text-black text-2xl font-sans-kr my-5">
            환경을 생각하며 새롭게 혁신합니다{" "}
          </h2>
        </div>
      </section>

      <section>
        <div className="flex flex-col place-content-between justify-items-stretch px-2 sm:px-4 py-10 text-center mx-30 mt-7 p-4 bg-gray-100 text-black">
          <ul className="flex flex-col place-content-between ">
            <li>구매처안내</li>
            <li>고객지원</li>
            <li>비행안전</li>
          </ul>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};

export default Home;
