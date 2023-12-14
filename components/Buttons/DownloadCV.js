import Image from "next/image";
import Link from "next/link";
import { HiArrowDown } from "react-icons/hi2";

const DownloadCV = () => {

  const downloadCVHandler = () => {

    const linkDownloadPDF = document.createElement('a')
    
    linkDownloadPDF.href='/Mario George -Web Developer.pdf'
    linkDownloadPDF.download='/Mario George -Web Developer.pdf'
    linkDownloadPDF.click() 
};
  return (
    <>
      <div
        className="mx-auto xl:mx-0 group cursor-pointer "
        onClick={downloadCVHandler}
      >
        <div className="bg-circleStar bg-no-repeat bg-cover flex items-center justify-center h-[185px] w-[185px] relative">
          <Image
            src={"/download-cv-text.png"}
            width={170}
            height={170}
            className="animate-spin-slow max-w-[170px] max-h-[170px]"
          />
          <HiArrowDown className="transition-all duration-300 group-hover:translate-y-3 transform text-4xl absolute " />
        </div>
      </div>
    </>
  );
};

export default DownloadCV;
