import Image from "next/image";
import { FaEye } from "react-icons/fa";

const PreviewCV = () => {
    const previewCVHandler = () => {
        window.open('/Mario George -Web Developer.pdf', '_blank');
      };
    
  return (
    <>
      <div
        className="mx-auto xl:mx-0 group cursor-pointer "
        onClick={previewCVHandler}
      >
        <div className="bg-circleStar bg-no-repeat bg-cover flex items-center justify-center h-[185px] w-[185px] relative">
          <Image
            src={"/preview-cv-text.png"}
            width={170}
            height={170}
            className="animate-spin-slow max-w-[170px] max-h-[170px]"
          />
          <FaEye className="transition-all duration-300 group-hover:scale-125 transform text-4xl absolute " />
        </div>
      </div>
    </>
  );
};

export default PreviewCV;
