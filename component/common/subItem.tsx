import Image from "next/image";
import drone3 from "../../public/drone3.jpeg";

const SubItem = (props: any) => {
  return (
    <div className="flex py-3 content-center justify-center">
      <div className="relative text-center mx-3 ">
        <Image
          className="rounded-xl justify-center"
          src={props.image1}
          width={458}
          height={523}
        />
        <h1 className="absolute z-1 inset-x-0 top-10 h-16 text-white smoothappear text-start px-10 mx-10 ibm text-xl font-medium">
          {props.name1}
        </h1>
      </div>

      <div className="relative text-center mx-3">
        <Image
          className="rounded-xl justify-center"
          src={props.image2}
          width={458}
          height={523}
        />
        <h1 className="absolute z-1 inset-x-0 top-10 h-16 text-white smoothappear text-start  px-10 mx-10  ibm text-xl font-medium">
          {props.name2}
        </h1>
      </div>
    </div>
  );
};
export default SubItem;
