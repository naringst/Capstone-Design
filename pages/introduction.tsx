import Image from "next/image";
import SubItem from "../component/common/subItem";
import Footer from "../component/layout/footer";
import Navbar2 from "../component/layout/navbar2";

//images
import yacht3 from "../public/yacht3.jpeg";
import boat5 from "../public/boat5.jpeg";
import drone4 from "../public/drone4.jpeg";
import boat2 from "../public/boat2.jpeg";
import drone3 from "../public/drone3.jpeg";
import google from "../public/google.jpeg";
import blueWhale from "../public/blueWhale.png";

const Fade = require("react-reveal/Fade");
const Introduction = () => {
  return (
    <div className="bg-blue-50">
      <Navbar2 />
      <div className="">
        <div className="py-5 mx-auto my-auto text-center  bg-blue-50">
          <h1 className="py-1 my-1 mx-auto font-extrabold text-3xl ibm ">
            Innovatory Blue Whale
          </h1>
          <h2>Build, share, and run applications with the Blue Whale</h2>
          <button className="my-3 font-semibold ibm text-white bg-blue-600 border border-blue-600 focus:outline-none hover:bg-gray-200 hover:text-blue-600 hover:border-gray-200 focus:ring-1 focus:ring-gray-200  rounded-full text-xs px-3 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
            블루웨일과 함께하기
          </button>
        </div>

        <div className="relative text-center pt-0 mt-0 ">
          <video
            className="items-center my-0"
            width="100%"
            height={300}
            autoPlay
            muted
            loop
          >
            <source src="wave.mp4" type="video/mp4"></source>
          </video>

          <div className="absolute z-1 inset-x-0 md:top-30 sm:top-20 top-10 mx-30 align-middle text-white smoothappear">
            <Fade>
              <p className="font-semibold md:pt-10 md:text-6xl sm:text-4xl text-2xl ibm leading-loose">
                블루웨일은
              </p>
              <p className=" font-semibold md:text-4xl sm:text-2xl text-xl ibm pb-1 mb-2 md:leading-relaxed sm:leading-relaxed leading-relaxed">
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

      <div className="text-center pt-20 mt-0 bg-gray-50">
        <Fade>
          <video className="items-center" width="100%" autoPlay muted loop>
            <source src="kiwa.mp4" type="video/mp4"></source>
          </video>
        </Fade>
      </div>

      <div className="md:p-10 md:mx-10 p-auto m-auto">
        <div className="text-center md:m-10 m-10 md:p-10 ">
          <Fade>
            <p className="font-semibold my-2 leading-loose md:text-3xl md:leading-loose sm:text-2xl sm:leading-loose text-xl ibm 2 ">
              세상의 문제를
              <br />
              단순히 해결하는 사람, 서비스가 아닌
            </p>
            <p className="font-semibold my-2 leading-loose md:text-5xl sm:text-3xl text-2xl ibm 2  ">
              문화를 만드는 기업
            </p>
            <p className="font-semibold my-2  leading-loose md:text-3xl md:leading-loose sm:text-2xl sm:leading-loose text-xl ibm 2 ">
              그것이 우리가 추구하는 목표입니다.
            </p>
          </Fade>
        </div>
      </div>

      {/* background Image */}

      <div className=" p-0 m-0 bg-darkBlue md:p-10 ">
        <div className="mx-auto md:p-20 p-10 align-middle text-white smoothappear">
          <h1 className="text-start leading-relaxed mx-auto md:px-2 font-semibold md:text-3xl sm:text-2xl  text-xl ibm my-2 ">
            변화를 열망하는 사람들이 모여,
            <br />
            역사에 남을만한 변화를 만듭니다.
          </h1>

          <div className="flex text-start ">
            <div className="text-start  md:mt-10 m-auto">
              <h5 className="font-light md:px-0 md:text-xl sm:text-lg text-normal ibm my-2">
                누적 가입자 수
              </h5>
              <h1 className="font-semibold md:text-5xl sm:text-3xl text-2xl ibm my-2 ">
                2,200만+
              </h1>
            </div>

            <div className="text-start  md:mt-10 mx-auto">
              <h5 className="font-light md:px-2 md:text-xl sm:text-lg text-normal ibm my-2 ">
                누적 투자금액
              </h5>
              <h1 className="font-semibold md:px-2 md:text-5xl sm:text-2xl text-xl ibm my-2">
                1조원 +
              </h1>
            </div>
          </div>
          <div className="flex text-start ">
            <div className="text-start  md:mt-10 m-auto">
              <h5 className="font-light md:px-0 md:text-xl sm:text-lg text-normal ibm my-2">
                전체 팀원 수
              </h5>
              <h1 className="font-semibold md:text-5xl sm:text-3xl text-2xl ibm my-2 ">
                1,500명+
              </h1>
            </div>

            <div className="text-start  md:mt-10 mx-auto">
              <h5 className="font-light md:px-2 md:text-xl sm:text-lg text-normal ibm my-2 ">
                출시 서비스 수
              </h5>
              <h1 className="font-semibold md:px-2 md:text-5xl sm:text-2xl text-xl ibm my-2">
                50개+
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="p-20">
        <h1 className="font-semibold md:text-5xl sm:text-4xl text-2xl ibm text-center">
          블루웨일이 바꿀 세상
        </h1>
        <h4 className="font-light md:text-xl sm:text-lg text-normal ibm  text-center my-5">
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
      <div className="bg-gray-50 md:p-20 px-auto py-4 content-center">
        <h1 className="font-semibold md:text-4xl sm:text-3xl text-2xl ibm text-center md:m-20 m-10 leading-normal md:leading-normal sm:leading-normal">
          세계적인 투자자들이 <br />
          블루웨일과 함께합니다
        </h1>
        <div className="md:flex justify-between md:mx-20  md:pb-10 md:px-3  ">
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
