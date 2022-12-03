import Navbar from "../component/layout/navbar";

import korea2 from "../public/korea2.jpg";
import Image from "next/image";

import Footer from "../component/layout/footer";
const Fade = require("react-reveal/Fade");

const Solution = () => {
  return (
    <div className="bg-gray-50 text-center">
      <Navbar />
      <div className="items-center p-20 mx-auto ">
        <Fade>
          <h1 className="ibm font-semibold text-4xl m-10 text-start">
            지금 드론은?
          </h1>
          <h1 className="ibm font-medium text-xl m-10 text-start">
            지도에 커서를 올려보세요
          </h1>
        </Fade>
        <Image src={korea2} width={700} height={850}></Image>
      </div>
      <Footer />
    </div>
  );
};

export default Solution;
