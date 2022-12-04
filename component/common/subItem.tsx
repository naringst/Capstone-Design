import Image from "next/image";

const SubItem = (props: any) => {
  return (
    <div className="md:flex md:py-3 content-center justify-center">
      <div className="relative text-center md:mx-3 mx-auto  ">
        <Image
          className="rounded-xl justify-center"
          src={props.image1}
          width={458}
          height={523}
        />
        <h1 className="absolute z-1 inset-x-0 top-10 h-16 text-white smoothappear text-start px-10 md:mx-10 mx-auto ibm md:text-xl sm:text-lg text-lg font-medium">
          {props.name1}
        </h1>
      </div>

      <div className="relative text-center md:mx-3 mx-auto ">
        <Image
          className="rounded-xl justify-center"
          src={props.image2}
          width={458}
          height={523}
        />
        <h1 className="absolute z-1 inset-x-0 top-10 h-16 text-white smoothappear text-start px-10 md:mx-10 mx-auto ibm md:text-xl sm:text-lg text-lg font-medium">
          {props.name2}
        </h1>
      </div>
    </div>
  );
};
export default SubItem;
