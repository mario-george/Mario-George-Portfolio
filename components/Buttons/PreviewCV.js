import Image from "next/image";
import { FaEye } from "react-icons/fa";

const PreviewCV = ({mob}) => {
  const previewCVHandler = () => {
    window.open("/Mario George -Web Developer.pdf", "_blank");
  };
  let w1 = 185;
  let h1 = 185;

  let w2 = 170;
  let h2 = 170;
  if (mob) {
    w1 = 120;
    h1 = 120;
    w2 = 130;
    h2 = 130;
  }
  return (
    <>
      <div
        className="mx-auto xl:mx-0 group cursor-pointer "
        onClick={previewCVHandler}
      >
        <div className={`bg-circleStar bg-no-repeat bg-cover flex items-center justify-center h-[${h1}px] w-[${w1}px] relative`}>
          <Image
            src={"/preview-cv-text.png"}
            width={w2}
            height={h2}
            className={`animate-spin-slow max-w-[${w2}px] max-h-[${h2}px]`}
          />
          <FaEye className="transition-all duration-300 group-hover:scale-125 transform text-4xl absolute " />
        </div>
      </div>
    </>
  );
};

export default PreviewCV;
