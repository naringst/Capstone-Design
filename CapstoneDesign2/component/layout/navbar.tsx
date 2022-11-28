import Link from "next/link";
import { FaSistrix, FaUser } from "react-icons/fa";
import Image from "next/image";
import blueWhale from "../../public/blueWhale.png";
import { useState, useEffect } from "react";

const Navbar = () => {
  //스크롤 시 navbar 색 변경
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (10 < window.scrollY) {
      setColor(true);
      //white
    } else {
      setColor(false);
    }
  };
  //870 < window.scrollY && window.scrollY < 910)

  useEffect(() => {
    window.addEventListener("scroll", changeColor, { passive: true });
  }, []);

  return (
    <nav
      className={
        color
          ? "bg-auto sticky top-0 z-50 bg-white text-black px-6 sm:px-4 py-3  dark:bg-gray-900 ibm "
          : "bg-auto sticky top-0 z-50 bg-transparent px-6 sm:px-4  py-3  dark:bg-gray-900 ibm"
      }
    >
      <div className="relative flex flex-wrap justify-between items-center text-xl ">
        <div className=" w-full md:block md:w-auto mt-0 ">
          <ul className=" flex flex-col mx-20 mt-0 md:flex-row md:space-x-8 md:mt-0 md:text-base md:font-xs md:border-0  ">
            {/*  bg-gray-50 rounded-lg border border-gray-100  md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 */}
            <Link href="/">
              <Image
                className="bg-transparent"
                src={blueWhale}
                alt=""
                width={70}
                height={20}
              ></Image>
            </Link>
            <li className="hover:font-medium">
              <Link href="/introduction">회사소개</Link>
            </li>
            <li className="hover:font-medium">
              <Link href="/education">교육</Link>
            </li>

            <li className="hover:font-medium ">
              <Link href="/solution">전문 솔루션</Link>
            </li>

            <li className="hover:font-medium">
              <Link href="/around">둘러보기</Link>
            </li>
            <li className="hover:font-medium">
              <Link href="/support">고객지원</Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col mx-20 md:flex-row md:space-x-8 md:mt-0 md:text-xs md:font-medium md:border-0 rounded-lg">
          {/*  bg-gray-50  border border-gray-100  md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 */}
          <FaSistrix />
          <FaUser />
          <div className="hover:text-slate-400">
            <Link href="/store">스토어</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
