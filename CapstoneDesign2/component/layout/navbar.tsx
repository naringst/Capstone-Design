import Link from "next/link";
import { FaSistrix, FaUser } from "react-icons/fa";
import Image from "next/image";
import blueWhale from "../../public/blueWhale.png";
import { useState } from "react";

const Navbar = () => {
  //스크롤 시 navbar 색 변경
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY > 0) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <nav
      className={
        color
          ? "bg-auto sticky top-0 z-50 bg-gray-100 mt-0 px-6 sm:px-4 py-3 rounded dark:bg-gray-900 "
          : "bg-auto sticky top-0 z-50 bg-gradient-to-t mt-0 px-6 sm:px-4 rounded py-3 dark:bg-gray-900"
      }
    >
      <div className="relative container flex flex-wrap justify-between items-center mx-auto font-sans-kr">
        <div className="hidden w-full md:block md:w-auto mt-0">
          <ul className="flex flex-col mx-20 mt-0 md:flex-row md:space-x-8 md:mt-0 md:text-xs md:font-xs md:border-0 ">
            {/*  bg-gray-50 rounded-lg border border-gray-100  md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 */}
            <Link href="/">
              <a>
                <Image
                  className="bg-transparent"
                  src={blueWhale}
                  alt=""
                  width={70}
                  height={20}
                ></Image>
              </a>
            </Link>
            <li>
              <Link href="/introduction">회사소개</Link>
            </li>
            <li>
              <Link href="/education">교육</Link>
            </li>

            <li className="peer">전문 솔루션</li>
            <div className="hidden peer-hover:flex hover:flex w-200 flex-col bg-white drop-shadow-lg">
              <a className="px-5  hover:bg-gray-200" href="/">
                지금 상담받기
              </a>
              <a className="px-5  hover:bg-gray-200" href="/">
                About Us
              </a>
            </div>

            <li>
              <Link href="/around">둘러보기</Link>
            </li>
            <li>
              <Link href="/support">고객지원</Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col mx-20 md:flex-row md:space-x-8 md:mt-0 md:text-xs md:font-medium md:border-0 rounded-lg">
          {/*  bg-gray-50  border border-gray-100  md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 */}
          <FaSistrix />
          <FaUser />

          <Link href="/store">스토어</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
