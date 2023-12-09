// import Link from next for navigation
import Link from "next/link";

// icons import
import {
  RiWhatsappLine,
  RiTelegramFill,
  RiLinkedinBoxFill,
} from "react-icons/ri";
// social icons
const SocialLinks = () => {
  return (
    <div className="flex items-center transition-all duration-300 gap-x-6 text-2xl ">
      <Link href={""} className="hover:text-accent ">
        <RiLinkedinBoxFill />
      </Link>
      <Link href={""} className="hover:text-accent ">
        <RiTelegramFill />
      </Link>
      <Link href={""} className="hover:text-accent ">
        <RiWhatsappLine />
      </Link>
    </div>
  );
};

export default Socials;
