import OnImageText from "../component/common/onimagetext";
import Navbar from "../component/layout/navbar";
import blueback from "../public/blueback.webp";
import Image from "next/image";
import SubItem from "../component/common/subItem";

import yacht3 from "../public/yacht3.jpeg";
import boat5 from "../public/boat5.jpeg";
import drone4 from "../public/drone4.jpeg";
import boat2 from "../public/boat2.jpeg";
import drone3 from "../public/drone3.jpeg";
import google from "../public/google.jpeg";
import blueWhale from "../public/blueWhale.png";
import Footer from "../component/layout/footer";

const Fade = require("react-reveal/Fade");
const Introduction = () => {
  return (
    <div className="">
      <Navbar />
      <div className="bg-blue-50">
        <div className="pt-5 mx-auto my-auto text-center  bg-blue-50">
          <h1 className="py-1 my-1 mx-auto font-extrabold text-3xl ibm ">
            Innovatory Blue Whale
          </h1>
          <h2>Build, share, and run applications with the Blue Whale</h2>
          <button className="my-3 font-semibold ibm text-white bg-blue-600 border border-blue-600 focus:outline-none hover:bg-gray-200 hover:text-blue-600 hover:border-gray-200 focus:ring-1 focus:ring-gray-200  rounded-full text-xs px-3 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
            블루웨일과 함께하기
          </button>
        </div>

        <div className="relative text-center pt-0 mt-0 bg-gray-50 ">
          <video
            className="items-center mx-auto my-10"
            width="100%"
            height={300}
            autoPlay
            muted
            loop
          >
            <source src="wave.mp4" type="video/mp4"></source>
          </video>

          <div className="absolute z-1 inset-x-0 top-40 mx-30 align-middle text-white smoothappear">
            <Fade>
              <p className="mt-0 font-semibold text-6xl ibm 2 my-2 leading-loose">
                블루웨일은
              </p>
              <p className=" font-semibold text-4xl ibm 2 my-2 leading-relaxed">
                <br />
                항공, 해상의 이동수단을
                <br />
                더 안전하게 더 효율적으로
                <br />
                환경을 생각하여
                <br />
                새롭게 혁신합니다.
              </p>
            </Fade>
          </div>
        </div>
      </div>

      <div className="text-center pt-10 mt-0 bg-gray-50">
        <video
          className="items-center mx-auto my-10"
          width="100%"
          autoPlay
          muted
          loop
        >
          <source src="kiwa.mp4" type="video/mp4"></source>
        </video>
      </div>
      <div className="bg-gray-50 p-20 m-20">
        <div className="text-center mx-20 my-10 px-20 py-10 ">
          <Fade>
            <p className="font-semibold text-3xl ibm 2 my-2 leading-loose">
              세상의 문제를
              <br />
              단순히 해결하는 사람, 서비스가 아닌
            </p>
            <p className="font-semibold text-5xl ibm 2 my-2 leading-loose">
              문화를 만드는 기업
            </p>
            <p className="font-semibold text-3xl ibm 2 my-2 leading-loose">
              그것이 우리가 추구하는 목표입니다.
            </p>
          </Fade>
        </div>
      </div>

      {/* background Image */}

      <div className="relative text-center pt-0 mt-0 bg-gray-50">
        <Image src={blueback} alt="" width={2000} height={1000}></Image>
        <div className="absolute z-1 inset-x-0 top-40 mx-30 align-middle text-white smoothappear">
          <h1 className="font-semibold text-3xl Exo2 my-2">
            변화를 열망하는 사람들이 모여,
            <br />
            역사에 남을만한 변화를 만듭니다.
          </h1>
          <h2 className="font-semibold text-2xl Exo 2 my-2">
            BlueWhale은 오늘도
            <br />
            위대한 역사를 만들고 있습니다
          </h2>
        </div>
      </div>

      <div className="p-20">
        <h1 className="font-semibold text-5xl ibm text-center">
          블루웨일이 바꿀 세상
        </h1>
        <h4 className="font-light text-xl ibm  text-center my-5">
          세상을 아우를 수 있는 문화를 만들고자 합니다
        </h4>
        <div className="">
          <SubItem
            name1="지속가능한 자연"
            name2="안전한 세상"
            image1={boat2}
            image2={drone3}
          />
          <SubItem
            name1="나만이 할 수 있는 것"
            name2="누구나 교육받을 세상"
            image1={yacht3}
            image2={boat5}
          />
          <SubItem
            name1="세상을 바꾸는 힘"
            name2="세상을 아우르는 문화 "
            image1={drone4}
            image2={drone3}
          />
        </div>
      </div>
      <div className="bg-gray-50 p-20 content-center">
        <h1 className="font-semibold text-4xl ibm text-center m-20 leading-normal">
          세계적인 투자자들이 <br />
          블루웨일과 함께합니다
        </h1>
        <div className="flex justify-between mx-20 px-20">
          <Image src={google} width={200} height={120} />
          <Image src={blueWhale} width={200} height={120} />
          <Image src={google} width={200} height={120} />
          <Image src={blueWhale} width={200} height={120} />
        </div>
        <div className="flex justify-between m-20 px-20">
          <Image src={google} width={200} height={120} />
          <Image src={blueWhale} width={200} height={120} />
          <Image src={google} width={200} height={120} />
          <Image src={blueWhale} width={200} height={120} />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Introduction;
