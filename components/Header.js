import Image from "next/image";
import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center -translate-y-6 gap-y-3">
          {/* logo */}
          <Link href={"/"}>
            <div className="relative flex flex-col  xl:pt-[4rem] items-center justify-center">
              <Image
                src={"/MarioGLogo.png"}
                width={200}
                height={50}
                alt="Mario George logo"
                priority={true}
                style={{
                  mixBlendMode: "multiply", // Apply the blend mode
                  backgroundColor: "transparent", // Set background color to transparent
                }}
                className="opacity-85"
              />
              <span className="text-center pl-[15px] hidden xl:flex w-full text-center font-bold text-2xl font-mono tracking-tighter text-accent  ">
                Mario G. David
              </span>
            </div>
          </Link>
          {/* socials */}
          <SocialLinks />
        </div>
      </div>
    </header>
  );
};

export default Header;
