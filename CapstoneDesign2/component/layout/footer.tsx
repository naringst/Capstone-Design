import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex flex-wrap place-content-between justify-between text-center items-center mx-auto pt-5 px-5  bg-gray-900 text-white">
      <ul>
        <li>제품 카테고리</li>
        <li>
          <Link href="/camera-drone">소비자</Link>
        </li>
        <li>
          <Link href="/hand-held">프로패셔널</Link>
        </li>
        <li>
          <Link href="/expert-solution">기업 솔루션</Link>
        </li>
        <li>
          <Link href="/expert-solution">부품</Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
