import Image from "next/image";
import Link from "next/link";
import Socials from "@/components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          {/* logo */}
          <Link href={"/"}>
            <div className="relative flex flex-col  pt-[4rem]">
              <Image
                src={"/MarioGLogo.png"}
                width={300}
                height={100}
                alt="Mario George logo"
                priority={true}
                style={{
                  mixBlendMode: "multiply", // Apply the blend mode
                  backgroundColor: "transparent", // Set background color to transparent
                }}

                className="opacity-85"
              />
              <span className="w-full text-center font-bold text-2xl font-mono tracking-tighter text-accent ">Mario G. David</span>
            </div>
          </Link>
          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
