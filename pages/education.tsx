import Footer from "../component/layout/footer";
import Navbar2 from "../component/layout/navbar2";

const Education = () => {
  return (
    <div className=" bg-gray-100 ">
      <Navbar2 />
      <section className="md:px-40 p-10 md:py-20 ibm place-items-center">
        <h1 className="text-center ibm md:text-3xl text-2xl font-semibold my-5">
          모두에게 교육받을 기회를 제공합니다
        </h1>
        <h2 className="ibm md:text-xl text-base font-light leading-relaxed">
          혹시라도 블루웨일 제품 사용 중 안전 피해를 입으셨다면 신고해주세요.
          앞으로 고객님이 안심하고 쓰실 수 있도록, 블루웨일의 잘못이 아니라도
          피해 금액을 보상해드려요.
        </h2>
        <div className="ibm md:text-sm text-xs bg-gray-200 hover:bg-gray-300 rounded-lg p-2 mt-3 ">
          <h1 className="p-3 my-2 text-center hover:cursor-pointer font-semibold">
            토스 계정을 잠시 잠그고 싶어요
          </h1>
        </div>
      </section>

      <section className="md:px-40 p-10 md:py-20 ibm place-items-center bg-blue-50">
        <h1 className="text-center ibm md:text-3xl text-2xl font-semibold my-5">
          무료강좌 수강하기
        </h1>
        <h2 className="ibm md:text-xl text-base font-light leading-relaxed">
          혹시라도 블루웨일 제품 사용 중 안전 피해를 입으셨다면 신고해주세요.
          앞으로 고객님이 안심하고 쓰실 수 있도록, 블루웨일의 잘못이 아니라도
          피해 금액을 보상해드려요.
        </h2>

        <div className="md:flex md:text-sm text-xs mx-auto place-content-stretch text-center py-5">
          <div className="bg-blue-200 hover:bg-blue-300 hover:cursor-pointer px-10 py-5 mx-auto mt-1 rounded-lg ">
            <h1 className="my-2 font-semibold">드론 작동법</h1>
          </div>
          <div className="bg-blue-200 hover:bg-blue-300 hover:cursor-pointer px-10 py-5 mx-auto mt-1 rounded-lg ">
            <h1 className="my-2 font-semibold">자동차 동작법 </h1>
          </div>
          <div className="bg-blue-200 hover:bg-blue-300  px-10 py-5  mx-auto mt-1 rounded-lg">
            <h1 className="my-2 font-semibold">선박 작동법</h1>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
export default Education;
