// next image
import Image from "next/image";

const Avatar = () => {
  return (
    <div className='hidden xl:flex xl:max-w-none '>
    <img
      src={'/MainAvatar.jpg'}
      width={700}
      height={643}
      alt=''
      className='translate-z-0 w-full h-full'
      style={{
          mixBlendMode: "", // Apply the blend mode
          backgroundColor: "transparent", // Set background color to transparent
        }}
    />
  </div>
  );
};

export default Avatar;
