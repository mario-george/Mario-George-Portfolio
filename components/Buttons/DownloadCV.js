import Image from "next/image";
import Link from "next/link";
import { HiArrowDown } from "react-icons/hi2";

const DownloadCV = ({mob}) => {

let w1=185
let h1=185

let w2=170
let h2=170
if(mob){
w1=120
h1=120
w2=130
h2=130
}
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
        <div className={`bg-circleStar bg-no-repeat bg-cover flex items-center justify-center h-[${h1}px] w-[${w1}px] ] relative`}>
          <Image
            src={"/download-cv-text.png"}
            width={w2}
            height={h2}
            className={`animate-spin-slow max-w-[${w2}px] max-h-[${h2}px]`}
          />
          <HiArrowDown className="transition-all duration-300 group-hover:translate-y-3 transform text-4xl absolute " />
        </div>
      </div>
    </>
  );
};

export default DownloadCV;
