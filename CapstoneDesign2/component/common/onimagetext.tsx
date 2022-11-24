const OnImageText = (props: any) => {
  return (
    <div className="absolute z-1 inset-x-0 top-60 h-16 text-white">
      <h2>{props.smalltext}</h2>
      <p className="font-bold text-4xl PT-sans">{props.name}</p>
      <h1 className="PT-sans">{props.subtitle}</h1>

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
    </div>
  );
};

export default OnImageText;
