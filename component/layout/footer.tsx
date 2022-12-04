import Link from "next/link";

const Footer = () => {
  return (
    <div className="wrapper bg-gray-900 pb-10">
      <div className="mx-7 px-10 py-10 text-sm ">
        <div className="ibm flex justify-start text-left leading-10 place-items-start mx-auto py-10 my-1 bg-gray-900 text-gray-400 border-2 border-gray-900 border-b-gray-600  ">
          <div className="mx-auto">
            <h1 className="mx-auto text-white leading-10 ">
              <Link href="/category">제품 카테고리</Link>
            </h1>
            <h2 className="mx-auto ">
              <Link href="/professional" className="mx-auto">
                소비자
              </Link>
            </h2>
            <h2 className="mx-auto ">
              <Link href="/professional" className="mx-auto">
                프로페셔널
              </Link>
            </h2>
          </div>

          <div className="mx-auto">
            <h1 className="mx-auto text-white  ">
              <Link href="/professional" className="mx-auto">
                안전비행
              </Link>
            </h1>
            <h2 className="mx-auto ">
              <Link href="/professional" className="mx-auto">
                구매처안내
              </Link>
            </h2>
            <h2 className="mx-auto ">
              <Link href="/professional" className="mx-auto">
                스토어
              </Link>
            </h2>
          </div>

          <div className="mx-auto  ">
            <h1 className="mx-auto text-white  ">
              <Link href="/solution" className="mx-auto">
                구매처안내
              </Link>
            </h1>
            <h2 className="mx-auto ">
              <Link href="/professional" className="mx-auto">
                구매처안내
              </Link>
            </h2>
            <h2 className="mx-auto ">
              <Link href="/professional" className="mx-auto">
                스토어
              </Link>
            </h2>
          </div>
          <div className="mx-auto ">
            <h1 className="mx-auto text-white  ">
              <Link href="/part" className="mx-auto">
                부품
              </Link>
            </h1>
            <h2 className="mx-auto ">
              <Link href="/professional" className="mx-auto">
                스토어
              </Link>
            </h2>
          </div>
        </div>

        <div className=" flex flex-wrap justify-start my-3 py-2 text-gray-600 ibm text-sm text-left place-items-start">
          <h5 className="mx-3">개인정보처리방침</h5>

          <h5 className="mx-3 ">쿠키사용</h5>
          <h5 className="mx-3">이용약관</h5>
        </div>

        <div className="text-gray-600 ibm text-sm mx-3 ">
          <h1>Copyright © 2022 Blue Whale All Rights Reserved</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
