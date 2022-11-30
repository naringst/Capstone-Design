import Navbar from "../component/layout/navbar";
const Fade = require("react-reveal/Fade");

const Introduction = () => {
  return (
    <>
      <Navbar />

      <div className="bg-blue-50">
        <div className="py-5 px-10 pt-10 mx-auto my-auto text-center  bg-blue-50">
          <h1 className="py-1 my-1 mx-auto font-extrabold text-3xl ibm ">
            Innovatory Blue Whale
          </h1>
          <h2>Build, share, and run applications with the Blue Whale</h2>
          <button className="my-3 font-semibold ibm text-white bg-blue-600 border border-blue-600 focus:outline-none hover:bg-gray-200 hover:text-blue-600 hover:border-gray-200 focus:ring-1 focus:ring-gray-200  rounded-full text-xs px-3 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
            블루웨일과 함께하기
          </button>
        </div>

        <div className="container  bg-gray-50 justify-items-center ibm">
          <div className="px-20 my-5 text-start py-10 text-sm text-black ibm bg-gray-100 ">
            <h1 className="my-1">블루웨일은 </h1>
            <h2 className="my-2">항공, 해상의 이동수단을</h2>
            <h2 className="my-2">더 안전하게 더 효율적으로 </h2>
            <h2 className="my-2">환경을 생각하며 새롭게 혁신합니다 </h2>
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </>
  );
};
export default Introduction;
