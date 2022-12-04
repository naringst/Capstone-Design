import korea2 from "../public/korea2.jpg";
import Image from "next/image";
import Footer from "../component/layout/footer";
import Navbar2 from "../component/layout/navbar2";
const Fade = require("react-reveal/Fade");

const Solution = () => {
  return (
    <div className=" text-center bg-blue-50">
      <Navbar2 />
      <div className="items-center md:px-20 md:py-10 mx-auto  ">
        <Fade>
          <h1 className="ibm font-semibold md:text-4xl text-2xl md:m-10 m-5 px-5 text-start">
            지금 드론은?
          </h1>
          <h1 className="ibm font-medium md:text-xl text-normal md:m-10 m-5 px-5 text-start">
            지도에 커서를 올려보세요
          </h1>
        </Fade>
        <div className="wrap relative">
          <Image
            className="target display-block"
            src={korea2}
            width={700}
            height={850}
          ></Image>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Solution;
