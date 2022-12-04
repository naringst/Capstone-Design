import classNames from "classnames";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaSistrix, FaUser } from "react-icons/fa";
import Image from "next/image";
import blueWhale from "../../public/blueWhale.png";
const Navbar2 = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [color, setColor] = useState(false);
  const [search, setSearch] = useState(false);

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
          ? "ibm sticky top-0 z-50 md:px-20 sm:px-10 bg-white text-black dark:text-white  dark:bg-gray-900 "
          : "ibm sticky top-0 z-50 bg-transparent md:px-20 sm:px-10  dark:text-white dark:bg-gray-900 "
      }
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          {/* 메뉴 */}
          <div className="flex space-x-4 ibm">
            <div>
              <Link
                href="/"
                className="flex items-center py-5 px-2 text-gray-700"
              >
                <div className="pt-5 align-middle hover:cursor-pointer">
                  <Image src={blueWhale} width={70} height={20}></Image>
                </div>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-1 md:text-sm sm:text-sm text-sm">
              <Link href="/introduction">
                <p className="py-5 px-3 text-gray-700 hover:text-gray-900 hover:font-bold hover:cursor-pointer">
                  회사소개
                </p>
              </Link>
              <Link href="/education">
                <p className="py-5 px-3 text-gray-700 hover:text-gray-900 hover:font-bold hover:cursor-pointer">
                  교육
                </p>
              </Link>
              <Link href="/solution">
                <p className="py-5 px-3 text-gray-700 hover:text-gray-900 hover:font-bold hover:cursor-pointer">
                  전문 솔루션
                </p>
              </Link>
              <Link href="/around">
                <p className="py-5 px-3 text-gray-700 hover:text-gray-900 hover:font-bold hover:cursor-pointer">
                  둘러보기
                </p>
              </Link>
              <Link href="/support">
                <p className="py-5 px-3 text-gray-700 hover:text-gray-900 hover:font-bold hover:cursor-pointer">
                  고객지원
                </p>
              </Link>
            </div>
          </div>

          {/* 메뉴2 */}
          <div className="hidden md:flex items-center space-x-5 pr-3 ibm ">
            <Link href="/search">
              <FaSistrix />
            </Link>
            <Link href="login">
              <FaUser className="" />
            </Link>
            <div className="hover:text-slate-400 text-sm">
              <Link href="/store">스토어</Link>
            </div>
          </div>

          {/* mobile menu */}
          <div className="md:hidden flex items-center">
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
        </div>
      </div>

      {/* mobile menu items */}
      <div
        className={classNames("md:hidden text-center", {
          hidden: !menuToggle,
        })}
      >
        <Link href="/introduction">
          <p className="block py-2 px-4 text-sm hover:bg-gray-200 hover:cursor-pointer">
            회사소개
          </p>
        </Link>
        <Link href="/education">
          <p className="block py-2 px-4 text-sm hover:bg-gray-200 hover:cursor-pointer">
            교육
          </p>
        </Link>
        <Link href="/solution">
          <p className="block py-2 px-4 text-sm hover:bg-gray-200 hover:cursor-pointer">
            전문 솔루션
          </p>
        </Link>
        <Link href="/around">
          <p className="block py-2 px-4 text-sm hover:bg-gray-200 hover:cursor-pointer">
            둘러보기
          </p>
        </Link>
        <Link href="/support">
          <p className="block py-2 px-4 text-sm hover:bg-gray-200 hover:cursor-pointer">
            고객지원
          </p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar2;
