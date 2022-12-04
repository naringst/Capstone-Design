import Footer from "../component/layout/footer";
import Image from "next/image";
import {
  BiKey,
  BiCartAlt,
  BiPhoneCall,
  BiLockAlt,
  BiGroup,
  BiMessageRoundedError,
  BiSearch,
} from "react-icons/bi";
import secure from "../public/secure.jpeg";
import Link from "next/link";
import Navbar2 from "../component/layout/navbar2";

const Support = () => {
  return (
    <div>
      <Navbar2 />
      <div className="justify-items-center md:px-20 py-10 p-auto bg-[#ecfdf5] mx-auto ">
        <div className="ibm text-center font-semibold md:text-5xl sm:text-4xl text-3xl md:px-20 md:py-5 mx-auto md:mx-20 my-5">
          <h1 className=" leading-tight">
            BW 고객센터에서 <br /> 24시간 상담받을 수 있어요!
          </h1>
        </div>

        <div className="flex md:px-20 py-10 mx-20 my-5 place-content-center divide-x-2 divide-gray-200">
          <div className="text-center px-5 ">
            <h2 className="ibm text-medium text-gray-500">피해, 사기 상담</h2>
            <h1 className="ibm font-semibold  text-2xl">1661-4905</h1>
          </div>
          <div className="text-center px-5">
            <h2 className="ibm text-medium text-gray-500">일반 상담</h2>
            <h1 className="ibm font-semibold text-2xl">1599-4905</h1>
          </div>
        </div>
        <div className="text-center mx-auto">
          <button className="ibm text-black md:text-lg bg-gray-200 border border-transparent focus:outline-none hover:bg-gray-150 focus:ring-1 focus:ring-gray-200 font-small rounded-full  px-3 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
            현재 상담 대기 : 보통
          </button>
          <BiPhoneCall size="50" className="mx-auto my-5" />
        </div>
      </div>

      <section className="md:px-40 p-10 md:py-20 ibm bg-white place-items-center">
        <h1 className="ibm md:text-3xl text-2xl font-semibold my-5">
          드론 안전 피해를 입으셨나요?
        </h1>
        <h2 className="ibm md:text-xl text-base font-light leading-relaxed">
          혹시라도 블루웨일 제품 사용 중 안전 피해를 입으셨다면 신고해주세요.
          앞으로 고객님이 안심하고 쓰실 수 있도록, 블루웨일의 잘못이 아니라도
          피해 금액을 보상해드려요.
        </h2>
        <div className="ibm md:text-sm text-xs bg-gray-100 rounded-lg p-2 mt-3 ">
          <BiLockAlt className="mx-auto mt-5" size={30} />
          <h1 className="p-3 mb-2 text-center">
            토스 계정을 잠시 잠그고 싶어요
          </h1>
        </div>
        <div className="container md:flex md:text-sm text-xs mx-0 place-content-stretch text-center">
          <div className="bg-gray-100 px-20 py-5 mx-auto mt-2 rounded-lg ">
            <BiGroup className="mx-auto mt-3" size={30} />
            <h1 className="mt-2">명의 도용 신고</h1>
          </div>
          <div className="bg-gray-100 px-20 py-5 mx-auto mt-2 rounded-lg ">
            <BiMessageRoundedError className="mx-auto mt-3" size={30} />
            <h1 className="mt-2">보이스피싱 신고</h1>
          </div>
          <div className="bg-gray-100 px-20 py-5  mx-auto mt-2 rounded-lg">
            <BiKey className="mx-auto mt-3" size={30} />
            <h1 className="mt-2">분실/도난/탈취 신고</h1>
          </div>
          <div className="bg-gray-100 px-20 py-5 mx-auto  mt-2 rounded-lg">
            <BiCartAlt className="mx-auto mt-3" size={30} />
            <h1 className="mt-2">중고거래 사기 신고</h1>
          </div>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="flex md:px-40 px-10">
          <div className="px-5 mx-auto py-20 ibm place-items-center">
            <h1 className="ibm md:text-3xl text-2xl font-semibold my-5">
              BW 안심 보장제를 알려드릴게요
            </h1>
            <h2 className="ibm md:text-xl text-normal font-light leading-relaxed ">
              사칭, 보이스피싱 또는 중고거래 피해를 입으셨나요? 너무 걱정하지
              마세요. 토스 안심보상제가 있어요.
            </h2>
            <button className="mt-10 my-4 px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 ibm md:text-lg">
              더 알아보기
            </button>
          </div>
          <div className="mx-auto py-20 ibm place-items-center">
            <Image src={secure} width={500} height={500} />
          </div>
        </div>
      </section>
      <section>
        <div className="md:px-40 md:py-20 p-10 mx-auto ibm">
          <h1 className="my-5 text-2xl font-medium">무엇을 도와드릴까요?</h1>
          <div className="flex bg-gray-50 mx-auto rounded-lg p-3 display-block ">
            <BiSearch size="20" className="content-start mx-2 " />
            <input
              className="bg-gray-50 text-gray-500 overflow-auto border-collapse  px-auto"
              type="text"
              size={100}
              placeholder="이용법, 혜택, 불편함 등 무엇이든 검색해보세요"
            />
          </div>

          <h1 className="py-3 my-3 px-2 md:text-xl text-lg text-gray-600 hover:bg-gray-100 rounded-lg hover:cursor-pointer">
            Q. 자동이체/오픈뱅킹 문자
          </h1>

          <h1 className="py-3 my-3 px-2 md:text-xl text-lg text-gray-600 hover:bg-gray-100 rounded-lg hover:cursor-pointer">
            Q. 본인 인증을 위해 신분증을 제출하라는데, 어떻게 하나요?
          </h1>

          <h1 className="py-3 my-3 px-2 md:text-xl text-lg  text-gray-600 hover:bg-gray-100 rounded-lg hover:cursor-pointer">
            Q. 거래 내역이나 계좌 잔액이 물음표로 나오면 어떻게 하나요?
          </h1>
          <Link href="/faq">
            <p className="text-blue-500 font-medium py-5 my-5">
              자주 묻는 질문 전체 보기 &gt;
            </p>
          </Link>
        </div>
      </section>
      <section className="bg-[#ecfdf5]">
        <div className="flex md:px-40 px-10">
          <div className="px-5 mx-auto md:py-20 py-10 ibm place-items-center">
            <h1 className="ibm md:text-3xl text-2xl font-semibold my-5 mr-4 leading-normal text-gray-700">
              문제가 아직 해결되지 않았다면 <br />
              언제든 연락해주세요
            </h1>
            <h2 className="ibm md:text-xl text-normal text-gray-600 font-light leading-relaxed ">
              24시간 BW 고객센터 1599-xxxx
            </h2>
          </div>
          <div className="mx-auto py-20 ibm place-items-center">
            <Image src={secure} width={300} height={200} />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default Support;
