import Navbar from "../component/layout/navbar";
import yacht4 from "../public/yacht4.jpeg";
import Image from "next/image";
import OnImageText from "../component/common/onimagetext";

const Solution = () => {
  return (
    <div className="place-content-cente justify-items-center mx-auto ">
      <Navbar />
      <Image src={yacht4} alt="" width={1600} height={700}></Image>
      <div className="place-content-center justify-items-center place-items-center mx-auto p-20 items-center justify-center flex px-10">
        <OnImageText
          className="relative p-10 place-content-center justify-items-center place-items-center mx-20"
          smalltext=""
          name={"공공안전"}
          subtitle={"항공 인사이트로 효과적인 대응"}
        />
      </div>
    </div>
  );
};

export default Solution;
