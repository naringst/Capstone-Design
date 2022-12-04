import Link from "next/link";
import { FaSistrix, FaUser } from "react-icons/fa";
import Image from "next/image";
import blueWhale from "../../public/blueWhale.png";
import { useState, useEffect } from "react";
import classNames from "classnames";

const Navbar = () => {
  //스크롤 시 navbar 색 변경
  const [color, setColor] = useState(false);
  const [search, setSearch] = useState(false);
  const [menuToggle, setMenuToggle] = useState(false);
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

  const handleSearchModal = () => {};
  return (
    <nav
      className={
        color
          ? "ibm bg-auto sticky top-0 z-50 bg-white text-black dark:text-white px-6 sm:px-4 py-3  dark:bg-gray-900 "
          : "ibm bg-auto sticky top-0 z-50 bg-transparent px-6 sm:px-4  py-3 dark:text-white dark:bg-gray-900 "
      }
    >
      <div className="relative flex flex-wrap justify-between items-center md:text-lg sm:text-base text-sm ">
        <div className="hidden md:flex items-center space-x-1">
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
              <li className="hover:font-bold">
                <Link href="/introduction">회사소개</Link>
              </li>
              <li className="hover:font-bold">
                <Link href="/education">교육</Link>
              </li>

              <li className="hover:font-bold ">
                <Link href="/solution">전문 솔루션</Link>
              </li>

              <li className="hover:font-bold">
                <Link href="/around">둘러보기</Link>
              </li>
              <li className="hover:font-bold">
                <Link href="/support">고객지원</Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col mx-20 md:flex-row md:space-x-8 md:mt-0 md:text-xs md:font-medium md:border-0 rounded-lg ">
            {/*  bg-gray-50  border border-gray-100  md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 */}

            <FaSistrix onClick={handleSearchModal} />

            <Link href="/login">
              <FaUser />
            </Link>
            <div className="hover:text-slate-400">
              <Link href="/store">스토어</Link>
            </div>
          </div>
        </div>

        {/* mobile menu */}
        <div className="md:hidden flex items-center ">
          <button onClick={() => setMenuToggle(!menuToggle)}>
            {menuToggle ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        <div
          className={classNames("md:hidden justify-between", {
            hidden: !menuToggle,
          })}
        >
          <div className="justify-center mx-auto px-auto">
            <Image src={blueWhale} width={100} height={30}></Image>

            <Link href="/introduction">
              <p className="block py-2 px-4 text-sm hover:bg-gray-200">
                {" "}
                회사소개
              </p>
            </Link>
            <Link href="/education">
              <p className="block py-2 px-4 text-sm hover:bg-gray-200"> 교육</p>
            </Link>
            <Link href="/solution">
              <p className="block py-2 px-4 text-sm hover:bg-gray-200">
                {" "}
                전문솔루션
              </p>
            </Link>
            <Link href="/around">
              <p className="block py-2 px-4 text-sm hover:bg-gray-200">
                {" "}
                둘러보기
              </p>
            </Link>
            <Link href="/support">
              <p className="block py-2 px-4 text-sm hover:bg-gray-200">
                {" "}
                고객지원
              </p>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
