const Fade = require("react-reveal/Fade");

const OnImageText = (props: any) => {
  return (
    <div>
      <div className="absolute z-1 inset-x-0 top-60 h-16 text-white smoothappear">
        <div className="onImageText1">
          <Fade>
            <h2 className="text-xl my-2 ibm">{props.smalltext}</h2>
            {/* </div> */}
            {/* <div className="onImageText2"> */}
            <p className="font-semibold text-6xl Exo 2 my-2">{props.name}</p>
            {/* </div> */}
            {/* <div className="onImageText3"> */}
            <p className="font-light text-3xl Exo 2 my-2">{props.subtitle}</p>

            <div className="button-wrapper">
              <button
                type="button"
                className="text-white bg-transparent border border-gray-300 focus:outline-none hover:bg-gray-150 focus:ring-1 focus:ring-gray-200 font-small rounded-full text-xs px-3 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                제품 구매
              </button>
              <button className="text-white bg-transparent border border-gray-300 focus:outline-none hover:bg-gray-150 focus:ring-1 focus:ring-gray-200 font-small rounded-full text-xs px-3 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                더 알아보기
              </button>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default OnImageText;
